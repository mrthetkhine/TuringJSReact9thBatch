'use server'
import { z } from "zod";
import { redirect } from 'next/navigation'
const schema = z.object({
    username:z.string({
        invalid_type_error: 'Invalid username',
    }).min(1,{
        message: "Username required",
    }),

    email: z.string().email({
        message: "Invalid email"
    }),
    status:z.string({
        message: "Name required",
    }).min(1,{
        message: "status required",
    }),
})
export default async function createUser(prevState: any,formData: FormData) {

    console.log('Previous state ',prevState);
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
        username:formData.get('username'),
        status: formData.get('status'),
    })
    console.log('validation success ',validatedFields.success);
    // Return early if the form data is invalid
    if (!validatedFields.success) {
        console.log('Retrun early');
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    else
    {
        redirect('/home');
        return {
            success: {
                message:'User have been created'
            }
        }
    }
    console.log('Done');
}