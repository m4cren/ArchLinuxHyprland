import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm, type FieldValues } from "react-hook-form";
import { ExpenseFormSchema } from "../../rules";
import type { z } from "zod";
import { categories } from "./categories";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseFormProps {
    onSubmit: (data: FieldValues) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ExpenseFormType>({
        resolver: zodResolver(ExpenseFormSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-group ">
            <h1>Expense Tracker</h1>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    id="description"
                    type="text"
                    className="form-control"
                    {...register("description")}
                />
                {errors?.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    id="amount"
                    type="text"
                    className="form-control"
                    {...register("amount", { valueAsNumber: true })}
                />
                {errors?.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    id="category"
                    className="form-select"
                    {...register("category")}
                >
                    {" "}
                    {categories.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
                {errors?.category && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default ExpenseForm;
