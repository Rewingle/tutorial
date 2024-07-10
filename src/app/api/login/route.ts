import { signIn } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest & { type: "credentials" | "github" }) {
    try {
        const request = await req.json();


        switch (request.type) {
            case "credentials":
                await signIn(
                    "credentials", {
                    email: request.email,
                    password: request.password
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
            case "github":
                await signIn("github")
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
        }
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