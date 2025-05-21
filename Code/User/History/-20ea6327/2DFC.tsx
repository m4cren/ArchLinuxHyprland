import { ToggleLeft, ToggleRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";

const DarkMode = () => {
    const { themes, toggleTheme } = useTheme();
    return (
        <button
            className={`flex flex-row items-center gap-3 cursor-pointer`}
            onClick={toggleTheme}
        >
            {themes === "dark" ? (
                <ToggleRight size={40} />
            ) : (
                <ToggleLeft size={40} />
            )}
            <h5 className="text-[1.3rem]">
                {themes === "dark" ? "Dark" : "Light"} Mode
            </h5>
        </button>
    );
};

export default DarkMode;
