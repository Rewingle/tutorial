"use client"
import { signIn } from '@/auth';
import { Button } from './ui/button';
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={onSubmitCredentials}>
                <Card className="w-[350px] border-black">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Start Shopping.</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">

                                <Input onChange={(e) => setEmail(e.target.value)} id="name" placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">

                                <Input onChange={(e) => setPassword(e.target.value)} id="password" type='password' placeholder="Password" />
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-end">

                        <Button type='submit'>Sign in</Button>
                    </CardFooter>
                </Card>

            </form>
            <br />
            <form action={
                async () => {
                    "use server"
                    await signIn('github')
                }
            }>
                <Button type='submit' className='w-full justify-between'>
                    <span>Sign in with GitHub </span><span><FaGithub size={50} /></span>

                </Button>
            </form>


        </div>
    )
}