import { signIn } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        
        const email = data.email;
        const password = data.password;

        await signIn(
            "credentials", {
            email: email,
            password: password
            }
        )
        return new NextResponse(
            JSON.stringify({
                message: "Login successful!",
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                status: 200,
            }
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({
                error: "Failed to login!",
                message: error,
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                status: 500,
            }
        );
    }
}