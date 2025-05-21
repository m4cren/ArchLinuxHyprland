import { useTheme } from "../../contexts/ThemeContextProvider";

const DropDownOptions = () => {
    const { themes } = useTheme();
    return (
        <select
            className={`${themes === "dark" ? "bg-[#1D1D1D]" : "bg-[#DADEE1]"} rounded-md px-4 gap-2`}
        >
            <option value="">Windows</option>
            <option value="">PlayStation</option>
            <option value="">Xbox</option>
            <option value="">Apple</option>
            <option value="">Linux</option>
        </select>
    );
};

export default DropDownOptions;
