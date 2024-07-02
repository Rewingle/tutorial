import Image from "next/image";
/* import { useState } from "react"; */
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Login } from "@/components/Login";

export default async function Home() {
  /*   const [data, setData] = useState<any[]>([]) */

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
  const session = await auth()
  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>LOGGED IN</div>
        <div>{session.user?.email}</div>
        <div>
          <img src={session.user?.image ?? ""} alt="github-profile-pic" />
        </div>
      </main>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />

    </main>
  );
}
