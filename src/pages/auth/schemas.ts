import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().min(1,"email is required").email("write a valid email"),
    password:z.string()
})