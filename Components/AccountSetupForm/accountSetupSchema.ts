import { z } from "zod";

const accountSetupSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .min(4, "Username must be at least 4 characters"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export {accountSetupSchema}