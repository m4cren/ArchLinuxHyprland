import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { useState } from "react";
import { Menu } from "lucide-react";
import MenuPhone from "../aside/MenuPhone";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";

const NavBar = () => {
    const { screenWidth } = useWindowResize();
    const [isMenu, setIsMenu] = useState<boolean>(false);

    const handleToggle = (action: "toggle" | "untoggle") => {
        if (action === "toggle") {
            setIsMenu(true);
        } else {
            setIsMenu(false);
        }
    };

    return (
        <div className="flex flex-row items-center px-5 lg:px-20 py-8 justify-between ">
            {isMenu && screenWidth <= 450 && (
                <MenuPhone handleToggle={handleToggle} />
            )}
            <div
                className={`flex flex-row gap-4 lg:gap-8 w-[100%] lg:w-[70%] items-center ${screenWidth <= 450 && "justify-between"}`}
            >
                <h1 className="text-[1.75rem] lg:text-[2.25rem] font-bold ">
                    {screenWidth <= 450 ? "GHub" : "GameHub"}
                </h1>
                <SearchBar />
                {screenWidth <= 450 && (
                    <Menu
                        size={40}
                        cursor={"pointer"}
                        onClick={() => {
                            handleToggle("toggle");
                        }}
                    />
                )}
            </div>
            {screenWidth >= 450 && <DarkMode />}
        </div>
    );
};

export default NavBar;
