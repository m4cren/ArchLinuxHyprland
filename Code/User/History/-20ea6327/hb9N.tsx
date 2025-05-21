import { ToggleLeft, ToggleRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";

const DarkMode = ({ screenWidth }: { screenWidth?: number }) => {
    const { themes, toggleTheme } = useTheme();
    return (
        <button
            className={`${screenWidth && screenWidth <= 450 && "hidden"} flex flex-row items-center gap-3 cursor-pointer`}
            onClick={toggleTheme}
        >
            {themes === "dark" ? (
                <ToggleRight size={40} />
            ) : (
                <ToggleLeft size={40} />
            )}
            <h5 className="text-[1.3rem]">Dark Mode</h5>
        </button>
    );
};

export default DarkMode;
