"use client"
import { Button } from '../../components/ui/button';
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';

export default function Register() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <form>
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
        </div>
    )
}