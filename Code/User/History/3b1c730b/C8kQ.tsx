import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ExpenseFormSchema = z.object({
    description: z.string().min(5).trim(),
    amount: z.number(),
    category: z.string(),
});

type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

const ExpenseForm = () => {
    const { regiser, handleSubmit, formState } = useForm<ExpenseFormType>({
        resolver: zodResolver(ExpenseFormSchema),
    });
    return (
        <form action="">
            <h1>Expense Tracker</h1>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" />
            </div>
            <div>
                <label htmlFor="category"></label>
                <input type="option" />
            </div>
        </form>
    );
};

export default ExpenseForm;
