import { z } from "zod";

export const perfectNumberValidator = z.object({
  description: z.string().min(1).optional(),
  number: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().min(0)
  ),
});

export type perfectNumberType = z.infer<typeof perfectNumberValidator>;
