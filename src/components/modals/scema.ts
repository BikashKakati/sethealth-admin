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
