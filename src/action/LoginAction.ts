import { redirect } from "react-router-dom"

export const LoginAction = async ({ request }) => {
    console.log(request)
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('password'),
    }
    console.log(submission)


    //muck in frontend
    // if(submission.message.length < 10){
    //     return {error: 'message should be atleast 10 characters'}
    // }

    //send post request

    //redirect user
    return redirect('/dashboard')
}
