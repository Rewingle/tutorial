"use client"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegisterSchema, registerSchema } from '@/lib/types';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Register() {

  /*   const session = useSession()
    if(!session){
        redirect('/')
    }
 */
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema)
    });
    /*     const [firstName, setFirstName] = useState<string>('');
        const [lastName, setLastName] = useState<string>('');
        const [email, setEmail] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [confirmPassword, setConfirmPassword] = useState<string>('');
     */
    const onSubmit = async (data: TRegisterSchema) => {
        // ...
        await new Promise((resolve) => setTimeout(resolve, 1000));

        reset();
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="w-[350px] border-black">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>Start Shopping.</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">

                                <Input {...register("firstName")} id="firstName" placeholder="First name" />
                            </div>
                            {errors.firstName && <span className='text-red-500 text-sm'>⚠️{errors.firstName.message}</span>}
                            <div className="flex flex-col space-y-1.5">

                                <Input {...register("lastName")} id="lastName" placeholder="Last name" />
                            </div>
                            {errors.lastName && <span className='text-red-500 text-sm'>⚠️{errors.lastName.message}</span>}
                            <div className="flex flex-col space-y-1.5">

                                <Input {...register("email")} id="name" placeholder="Email" />
                            </div>
                            {errors.email && <span className='text-red-500 text-sm'>⚠️{errors.email.message}</span>}
                            <div className="flex flex-col space-y-1.5">

                                <Input {...register("password")} id="password" type='password' placeholder="Password" />
                            </div>
                            {errors.password && <span className='text-red-500 text-sm'>⚠️{errors.password.message}</span>}
                            <div className="flex flex-col space-y-1.5">

                                <Input {...register("confirmPassword")} id="confirmPassword" type='password' placeholder="Confirm password" />
                            </div>
                            {errors.confirmPassword && <span className='text-red-500 text-sm'>⚠️{errors.confirmPassword.message}</span>}

                            <div className='flex'>
                                <span className=' flex justify-center items-center'>
                                    <span className='flex'><Checkbox id="terms" /></span>
                                    <span className='ml-2'><Label>I accept Terms and Condition</Label></span>
                                </span>
                                <span></span>
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button disabled={isSubmitting} type='submit'>Sign in</Button>
                    </CardFooter>
                </Card>
            </form>

        </div>
    )
}