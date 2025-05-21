import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
import ExpenseList from "./ExpenseList";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;
const Main = () => {
    const [expenseData, setExpenseData] = useState<ExpenseFormType[]>([]);
    const handleDelete = (itemId: number) => {
        setExpenseData(expenseData.filter((_, index) => index !== itemId));
    };
    const handleFilter = (
        filterer: "All Category" | "Groceries" | "Utilities" | "Entertainment",
    ) => {
        if (filterer === "All Category") {
            return;
        } else {
            setExpenseData(
                expenseData.filter(({ category }) => category === filterer),
            );
        }
    };
    return (
        <div>
            <ExpenseForm
                expenseData={expenseData}
                setExpenseData={setExpenseData}
            />
            {expenseData.length > 0 && (
                <ExpenseList
                    expenseData={expenseData}
                    onDelete={handleDelete}
                    onFilter={handleFilter}
                />
            )}
        </div>
    );
};

export default Main;
