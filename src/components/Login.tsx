import { signIn } from '@/auth';
import { Button } from './ui/button';
import { FaGithub } from "react-icons/fa";

export function Login() {
    return (
        <div>
            <form action={
                async () => {
                    "use server"
                    await signIn('github')
                }
            }>
                <div>
                    <h1 className='font-bold'>LOGIN</h1>
                </div>
                <br/>
                <Button type='submit'>
                    <span>Sign in with GitHub </span><span style={{ marginLeft: '1rem' }}><FaGithub size={50} /></span>

                </Button>
            </form>
        </div>
    )
}