import { ToggleLeft, ToggleRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";

const DarkMode = () => {
    const { screenWidth } = useWindowResize();
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
            <h5 className="text-[1.3rem]">
                {themes === "dark" ? "Dark" : "Light"} Mode
            </h5>
        </button>
    );
};

export default DarkMode;
