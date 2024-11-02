import { z } from "zod";

export const inviteDoctorsSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name is required" })
    .regex(/^[a-zA-Z\s]+$/, "name should only contain letters"),
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "Invalid Email" }),
});
export type InviteSchemaType = z.infer<typeof inviteDoctorsSchema>


export const createServiceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "name is required" })
    .max(25,"name cannot exceed 25 characters.")
    .regex(/^[a-zA-Z\s]+$/, "name should only contain letters"),
  symptoms: z
    .string()
    .trim()
    .min(1, { message: "Symptom is required" })
    // .regex(/^[a-zA-Z\s]+$/, "name should only contain letters"),
});

export type CreateServiceSchemaType = z.infer<typeof createServiceSchema>
