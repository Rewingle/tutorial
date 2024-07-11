
import Image from "next/image";
/* import { useState } from "react"; */
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  const session = await auth()
/*  if(!session){
    redirect('/login')
  } */
 
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div>HOME PAGE</div>
        
        { <div>{session?.user?.name}</div> }
        <div>
          <br/>
         {/*  <img src={session.user?.image ?? ""} alt="github-profile-pic" /> */}
         {!session?<Link href="/login"><Button>LOGIN</Button></Link>:null}
        </div>
      </main>
    )
 
 
}
