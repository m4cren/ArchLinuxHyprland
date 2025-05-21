import { z } from "zod";
import { ExpenseFormSchema } from "./rules";
export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;
