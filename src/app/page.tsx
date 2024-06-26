"use client"
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
/* import { getServerAuthSession } from "@/actions/auth"; */
import { useSession } from "next-auth/react";

export default function Home() {
  /*   const [data, setData] = useState<any[]>([]) */
  const [value, setValue] = useState<any>(50)
  
  const onSubmit = async (e: any) => {
    e.preventDefault()
    console.log('SUBMIT')
    await signIn("credentials", {
      username: 'test',
      password: 'test',
      redirect: true,
      callbackUrl: "/feed"
    })
  }
  const {data: session} = useSession();
  if(!session?.user){
    redirect('/login')
  }else{
    alert('You are already logged in')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className="grid-cols-2 bg-red-400">
          <div className="mr-12 text-2xl">{value}</div>
          <div>
            <Slider
              defaultValue={[value]}
              onValueChange={(val) => { setValue(val) }}
              max={100}
              step={1}
              className={cn("w-[60%]", 'className')}

            />
          </div>
        </div>
        <br />
        <form onSubmit={onSubmit}>
          <label>Username:</label>
          <input type="text" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <Button onClick={() =>
            signIn()
          }>SIGN IN</Button>
        </form>
        <br />
        <div className="hover:rounded-md border-2 border-black inline-block items-center justify-center">
          <br />

          <Link href='/products'>ABOUT PAGE</Link>
        </div>
      </div>
    </main>
  );
}
