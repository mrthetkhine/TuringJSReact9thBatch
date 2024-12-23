'use server'

import {z} from "zod";

const movieSchema = z.object({
    name:z.string().min(1,{message:'Name required'}),
    year:z.number().min(1,{message:'Year required'}),
    director:z.string().min(1,{message:'Director required'}),
})
export default async function saveMovieAction(prevState:any, formData:FormData)
{
    const movieFormData = Object.fromEntries(formData);
    const validateMovieForm = movieSchema.safeParse(movieFormData);

    if(!validateMovieForm.success)
    {
        const formFieldErrors = validateMovieForm.error.flatten().fieldErrors;
        return {
            errors: {
                name: formFieldErrors?.name,
                year: formFieldErrors?.year,
                director: formFieldErrors?.director,

            },
        };
    }
    else
    {
        //Save movies
    }
}