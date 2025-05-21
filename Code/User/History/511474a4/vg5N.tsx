import { ChevronDown } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";

const Header = () => {
    const { themes } = useTheme();
    return (
        <div className="flex flex-col">
            <h1 className="font-extrabold text-[4rem]">Adventure Games</h1>
            <div className="flex flex-row gap-4">
                <button
                    className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3]"}  flex flex-row items-center gap-4 rounded-md px-6 py-2`}
                >
                    Platforms
                    <ChevronDown />
                </button>
                <button
                    className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3]"}   flex flex-row items-center gap-4  rounded-md px-6 py-2`}
                >
                    Order by: Relevance
                    <ChevronDown />
                </button>
            </div>
        </div>
    );
};

export default Header;
