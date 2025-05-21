interface ExpenseFilterProps {
    onChangeFilter: (filterer: string) => void;
}

const ExpenseFilter = ({ onChangeFilter }: ExpenseFilterProps) => {
    return (
        <select
            className="form-select mb-3 mt-3"
            onChange={(event) => onChangeFilter(event.currentTarget.value)}
        >
            <option value="All Category">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
        </select>
    );
};

export default ExpenseFilter;
