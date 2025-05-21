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
        <form action="" className="form-group gap-2">
            <h1>Expense Tracker</h1>
            <div className="">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input id="description" type="text" className="form-control" />
            </div>
            <div>
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input id="amount" type="text" className="form-control" />
            </div>
            <div>
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select id="category" className="form-control">
                    {" "}
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ExpenseForm;
