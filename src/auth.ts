import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    /* callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
          }
    }, */
    providers: [GitHub, Credentials(
        {   /* name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "test"},
                password: { label: "Password", type: "password" }
            }, */
            async authorize(credentials) {
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
});