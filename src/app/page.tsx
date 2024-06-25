"use client"
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { getUsers } from "@/actions/data";
import Link from "next/link";

export default function Home() {
  /*   const [data, setData] = useState<any[]>([]) */
  const [value, setValue] = useState<any>(50)
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
        <Button onClick={() =>
          console.log(getUsers)
        }>BUTTON</Button>
        <br />
        <div className="hover:rounded-md border-2 border-black inline-block items-center justify-center">
          <br />

          <Link href='/about'>ABOUT PAGE</Link>
        </div>

        {/* 
        {data?.map(({ id, firstName, lastName }) => (
          <div key={id}>{firstName + ' ' + lastName}</div>
        ))} */}
      </div>
    </main>
  );
}
