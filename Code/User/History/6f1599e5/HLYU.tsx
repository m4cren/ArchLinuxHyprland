import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseListProps {
    expenseData: ExpenseFormType[];
    setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormType[]>>;
}

const ExpenseList = ({ expenseData, setExpenseData }: ExpenseListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {expenseData.map(({ amount, category, description }, index) => (
                    <tr key={index}>
                        <td>{description}</td>
                        <td>${amount.toLocaleString().padEnd(2, "0")}</td>
                        <td>{category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
