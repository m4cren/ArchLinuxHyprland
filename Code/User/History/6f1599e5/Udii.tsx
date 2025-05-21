import { z } from "zod";
import type { ExpenseFormSchema } from "../../rules";

export type ExpenseFormType = z.infer<typeof ExpenseFormSchema>;

interface ExpenseListProps {
    onDelete: (itemId: number) => void;
    onFilter: (filterer: string) => void;
    filteredData: ExpenseFormType[];
}

const ExpenseList = ({
    onDelete,
    onFilter,
    filteredData,
}: ExpenseListProps) => {
    return (
        <>
            <select
                className="form-select mb-3 mt-3"
                onChange={(event) => onFilter(event.currentTarget.value)}
            >
                <option value="All Category">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
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
                    {filteredData.map(
                        ({ amount, category, description }, index) => (
                            <tr key={index}>
                                <td>{description}</td>
                                <td>${amount.toFixed(2)}</td>
                                <td>{category}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => onDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ),
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td>
                            $
                            {filteredData
                                .reduce(
                                    (
                                        acc: number,
                                        expense: ExpenseFormType,
                                    ): number => (acc += expense.amount),
                                    0,
                                )
                                .toFixed(2)}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default ExpenseList;
