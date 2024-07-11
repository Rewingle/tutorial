
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { signIn, auth, providerMap } from '@/auth'
import { AuthError } from 'next-auth';

export default function Login() {

    /* 
        const onSubmitCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        type: 'credentials',
                        email: email,
                        password: password
                    })
                })
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Failed to login:", errorData);
                    return;
                }
                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.log(error)
            }
        }
        const onSubmitGithub = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        type: 'github'
                    })
                })
            } catch (error) {
                console.log(error)
            }
        } */
    return (
        <>
            <div>
                {Object.values(providerMap).map((provider) => (
                    <form
                        action={async () => {
                            "use server"
                            try {
                                await signIn()
                            } catch (error) {
                                // Signin can fail for a number of reasons, such as the user
                                // not existing, or the user not having the correct role.
                                // In some cases, you may want to redirect to a custom error
                                if (error instanceof AuthError) {
                                    return redirect(`/login?error=${error.type}`)
                                }

                                // Otherwise if a redirects happens NextJS can handle it
                                // so you can just re-thrown the error and let NextJS handle it.
                                // Docs:
                                // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                                throw error
                            }
                        }}
                    >
                        <Button type="submit">
                            <span>Sign in with {provider.name}</span>
                        </Button>
                    </form>
                ))}
                <form action={async (formData) => {
                    "use server"
                    try {
                        console.log(formData)
                        await signIn("credentials", formData)
                    } catch (error) {
                        console.log(error)
                    }
                }}>
                    <Input id="email" placeholder="Email" />
                    <Input id="password" type='password' placeholder="Password" />
                    <Button type="submit">LOGIN</Button>
                </form>
            </div>
            <br />
            <Link href={'/register'}>
                <Button className='w-full' variant={'outline'}>
                    <span>REGISTER</span>
                </Button>
            </Link>


        </>
    )
}