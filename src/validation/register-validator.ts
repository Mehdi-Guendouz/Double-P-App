import { z } from "zod";

export const registerValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  userName: z.string().min(3),
});

export type registerType = z.infer<typeof registerValidator>;
