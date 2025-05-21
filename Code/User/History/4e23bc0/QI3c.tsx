import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import type { FieldValues } from "react-hook-form";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;
const Main = () => {
    const [expenseData, setExpenseData] = useState<ExpenseFormType[]>([]);
    const handleSubmit = (data: FieldValues) => {
        const dataForm: ExpenseFormType[] = data as ExpenseFormType[];

        setExpenseData(dataForm);
    };
    const handleDelete = (itemId: number) => {
        setExpenseData(expenseData.filter((_, index) => index !== itemId));
    };

    const [filterer, setFilterer] = useState<string>("");

    const filteredData = filterer
        ? expenseData.filter(({ category }) => category === filterer)
        : expenseData;
    return (
        <div>
            <ExpenseForm onSubmit={(data) => handleSubmit(data)} />

            {expenseData.length > 0 && (
                <>
                    <ExpenseFilter
                        onChangeFilter={(filter) => setFilterer(filter)}
                    />
                    <ExpenseList
                        onDelete={handleDelete}
                        filteredData={filteredData}
                    />
                </>
            )}
        </div>
    );
};

export default Main;
