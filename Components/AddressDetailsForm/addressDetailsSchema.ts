import { z } from "zod";

const addressDetailsSchema = z.object({
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z
      .string()
      .min(1, "Zip code is required")
      .min(5, "Zip code must be at least 5 digits")
      .regex(/^\d+$/, "Zip code must contain only numbers"),
  });
  export { addressDetailsSchema };