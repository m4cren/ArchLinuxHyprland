import { z } from "zod";

export const ExpenseFormSchema = z.object({
    description: z.string().min(3).trim(),
    amount: z.number(),
    category: z.string(),
});
