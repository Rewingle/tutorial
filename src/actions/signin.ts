import { signIn } from '@/auth';

export default async function signinAction(provider: 'github' | 'credentials', credentials?: { email: string, password: string }) {
    if(provider == 'credentials'){
        
        await signIn('credentials', {
            email: credentials?.email,
            password: credentials?.password
        })
    }else {
        await signIn('github')
    }
}