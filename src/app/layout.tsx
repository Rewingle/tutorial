import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { auth } from "../auth"
import { Login } from "@/components/Login";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  /*   if (!session?.user) return null  */

  return (

    <html lang="en">
      <body className={inter.className}>
        {
          session?.user ? <NavBar /> : null}
        <div className="flex items-center justify-center py-20 h-full">
         {/*  {session?.user ? children :
            <div className="h-full">
              <Login />

            </div>
          } */}
          {children}
        </div>
        <Footer />
      </body>
    </html>

  );
}
