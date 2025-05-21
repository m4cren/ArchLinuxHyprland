import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm, type FieldValues } from "react-hook-form";
import { ExpenseFormSchema } from "../../rules";
import type { z } from "zod";
import type React from "react";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseFormProps {
    expenseData: ExpenseFormType[];
    setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormType[]>>;
}

const ExpenseForm = ({ setExpenseData, expenseData }: ExpenseFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        resetField,
        reset,
    } = useForm<ExpenseFormType>({
        resolver: zodResolver(ExpenseFormSchema),
    });

    const onSubmit = (data: FieldValues) => {
        const formData: ExpenseFormType = data as ExpenseFormType;
        if (isValid) {
            setExpenseData([...expenseData, formData]);
            reset();
        }
    };
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
                    className="form-control"
                    {...register("category")}
                >
                    {" "}
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
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
