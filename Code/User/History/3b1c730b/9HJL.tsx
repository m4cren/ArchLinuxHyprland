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
            <div className="">
                <label htmlFor="description">Description</label>
                <input id="description" type="text" />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    {" "}
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default ExpenseForm;
