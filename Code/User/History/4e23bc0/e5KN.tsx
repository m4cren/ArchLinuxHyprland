import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;
const Main = () => {
    const [expenseData, setExpenseData] = useState<ExpenseFormType[]>([]);

    useEffect(() => {
        console.log(expenseData);
    }, [expenseData]);
    return (
        <div>
            <ExpenseForm
                expenseData={expenseData}
                setExpenseData={setExpenseData}
            />
        </div>
    );
};

export default Main;
