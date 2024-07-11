import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
    GitHub,
    Credentials({
        credentials: {
            email: { label: "Email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(c) {
            if (c.email === 'test@test.com' && c.password === 'test') {

                return {
                    id: "test",
                    name: "Test User",
                    email: "test@test.com",
                }
            }
            return null
        }
    })
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
        signIn: "/login",
        error: "/login/error",
    }

})
/* export const { handlers, signIn, signOut, auth } = NextAuth({

    providers: [GitHub, Credentials(
        {  
            authorize(credentials) {
                // Your authorization logic here
                console.log(credentials.email, credentials.password)
                if (credentials.email === 'test@test.com' || credentials.password === 'test') {
                 return { name: 'Test User' }   
                }
                else {
                    throw new Error('Invalid credentials')
                }
            }
        }
    )]
}); */