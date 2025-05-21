import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;
const Main = () => {
    const [expenseData, setExpenseData] = useState<ExpenseFormType[]>([]);
    const handleDelete = (itemId: number) => {
        setExpenseData(expenseData.filter((_, index) => index !== itemId));
    };

    const [filterer, setFilterer] = useState<string>("");

    const filteredData = filterer
        ? expenseData.filter(({ category }) => category === filterer)
        : expenseData;
    return (
        <div>
            <ExpenseForm
                expenseData={expenseData}
                setExpenseData={setExpenseData}
            />
            <ExpenseFilter onChangeFilter={(filter) => setFilterer(filter)} />
            {expenseData.length > 0 && (
                <ExpenseList
                    onDelete={handleDelete}
                    filteredData={filteredData}
                />
            )}
        </div>
    );
};

export default Main;
