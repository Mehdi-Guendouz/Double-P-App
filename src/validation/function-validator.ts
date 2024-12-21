import { z } from "zod";

export const functionValidator = z.object({
  word: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  number: z
    .preprocess(
      (a) => parseInt(z.string().parse(a), 10),
      z.number().positive().min(1)
    )
    .optional(),
});

export type functionType = z.infer<typeof functionValidator>;
