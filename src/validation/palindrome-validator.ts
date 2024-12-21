import { z } from "zod";

export const palindromeValidator = z.object({
  word: z.string().min(3),
  description: z.string().min(1).optional(),
});

export type palindromeType = z.infer<typeof palindromeValidator>;
