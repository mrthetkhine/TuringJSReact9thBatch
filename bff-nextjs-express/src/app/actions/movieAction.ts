'use server'

import {z} from "zod";
import axiosInstance from "../axiosInstance";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {originConsoleError} from "next/dist/client/components/globals/intercept-console-error";

const movieSchema = z.object({
    title:z.string().min(1,{message:'Title required'}),
    year:z.string().min(1,{message:'Year required'}),
    director:z.string().min(1,{message:'Director required'}),
})
export async function saveMovieAction(prevState:any, formData:FormData)
{
    console.log('Save movie action ');
    const movieFormData = Object.fromEntries(formData);
    const validateMovieForm = movieSchema.safeParse(movieFormData);

    if(!validateMovieForm.success)
    {
        console.log('Error ',validateMovieForm.error)
        const formFieldErrors = validateMovieForm.error.flatten().fieldErrors;
        return {
            errors: {
                title: formFieldErrors?.title,
                year: formFieldErrors?.year,
                director: formFieldErrors?.director,

            },
        };
    }
    else
    {
        console.log('Saving movie');
        //Save movies
        let redirectUrl = '';
        let movie = {
            title:formData.get('title'),
            year:formData.get('year'),
            director :{
                name:formData.get('director')
            }
        }
        try {
            const movieSaveResponse = await axiosInstance.post('/api/movies',movie);
            const savedMovie = movieSaveResponse.data;
            console.log('Saved movie response ',savedMovie);
            redirectUrl='/movies';

        }
        catch(e)
        {
            console.log('Error ',e);
            redirectUrl='/movies';
        }
        finally {
            revalidatePath(redirectUrl);
        }

    }
}
export async function deleteMovieAction(movieId:string)
{
    let redirectUrl = '';
    try {
        const movieDeleteResponse = await axiosInstance.delete(`/api/movies/${movieId}`);
        const deletedMovie = movieDeleteResponse.data;
        console.log('Delete movie response ',deletedMovie);
        return deletedMovie;
        redirectUrl='/movies';

    }
    catch(e)
    {
        console.log('Error ',e);
        redirectUrl='/movies';
    }
    finally {
        revalidatePath(redirectUrl);
    }
}