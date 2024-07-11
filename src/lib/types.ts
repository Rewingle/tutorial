import {z} from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(1,{message: "First name is required."}),
    lastName: z.string().min(1,{message: "Last name is required."}),
    email: z.string().email(),
    password: z.string()
        .min(
            6, { message: "Password must be at least 6 characters." }
        )
        .max(20, { message: "Password can't be more than 20 characters." }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type TRegisterSchema = z.infer<typeof registerSchema>;