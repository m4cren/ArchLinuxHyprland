import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseListProps {
    expenseData: ExpenseFormType[];
    setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormType[]>>;
}

const ExpenseList = ({ expenseData, setExpenseData }: ExpenseListProps) => {
    return (
        <table className="table table-bordered align-middle">
            <thead className="table-light">
                <tr className="fw-bold fs-5 text-center">
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {expenseData.map(({ amount, category, description }, index) => (
                    <tr key={index}>
                        <td>{description}</td>
                        <td>${amount.toString().padStart(2, "0")}</td>
                        <td>{category}</td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
