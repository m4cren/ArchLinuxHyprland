import { Search } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";

const SearchBar = () => {
    const { themes } = useTheme();
    const { screenWidth } = useWindowResize();
    return (
        <>
            <form
                action=""
                className={`relative flex flex-row items-center w-[70%]`}
            >
                <span className={`absolute left-3 lg:left-5`}>
                    <Search />
                </span>
                <input
                    type="text"
                    className={`${
                        themes === "dark"
                            ? "bg-[#3B3B3B]"
                            : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"
                    } rounded-full w-full h-[2.5rem] lg:h-[3rem] pl-12 lg:pl-15 outline-none`}
                    placeholder={`${screenWidth <= 450 ? "Search..." : "Search games..."}`}
                />
            </form>
        </>
    );
};

export default SearchBar;
