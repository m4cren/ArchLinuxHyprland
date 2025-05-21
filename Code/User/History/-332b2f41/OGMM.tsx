import { categories } from "./Main";

interface ExpenseFilterProps {
    onChangeFilter: (filterer: string) => void;
}

const ExpenseFilter = ({ onChangeFilter }: ExpenseFilterProps) => {
    return (
        <select
            className="form-select mb-3 mt-3"
            onChange={(event) => onChangeFilter(event.currentTarget.value)}
        >
            <option value="">All Categories</option>
            {categories.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
