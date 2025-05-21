import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";
import { useEffect, useState } from "react";
export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseListProps {
    expenseData: ExpenseFormType[];
    setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormType[]>>;
}

const ExpenseList = ({ expenseData, setExpenseData }: ExpenseListProps) => {
    const [total, setTotal] = useState<number>(0);
    const handleDelete = (itemId: number) => {
        setExpenseData(expenseData.filter((_, index) => index !== itemId));
    };
    useEffect(() => {
        const totalAmount = expenseData.reduce(
            (acc: number, item: ExpenseFormType): number => {
                return (acc += item.amount);
            },
            0,
        );
        setTotal(totalAmount);
    }, [expenseData]);
    return (
        <table className="table table-bordered align-middle">
            <thead className="table-light">
                <tr className="fw-bold fs-5 text-center">
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="text-center">
                {expenseData.map(({ amount, category, description }, index) => (
                    <tr key={index}>
                        <td>{description}</td>
                        <td>${amount.toString().padStart(2, "0")}</td>
                        <td>{category}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td>${total}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;
