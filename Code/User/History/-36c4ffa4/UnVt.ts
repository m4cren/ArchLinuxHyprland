import { z } from "zod";
import { categories } from "./components/expenseTracker/Main";

export const ExpenseFormSchema = z.object({
    description: z.string().min(3).trim(),
    amount: z.number(),
    category: z.enum(categories),
});
