import Image from "next/image";
/* import { useState } from "react"; */

import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>HOME PAGE</div>
        <div>{session.user?.name}</div>
        <div>
          <img src={session.user?.image ?? ""} alt="github-profile-pic" />
        </div>
      </main>
    )
  }
 
}
