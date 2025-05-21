import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MenuPhone from "../aside/MenuPhone";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenu, setIsMenu] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-row items-center px-5 lg:px-20 py-8 justify-between ">
            {isMenu && <MenuPhone />}
            <div
                className={`flex flex-row gap-4 lg:gap-8 w-[100%] lg:w-[70%] items-center ${width <= 450 && "justify-between"}`}
            >
                <h1 className="text-[1.75rem] lg:text-[2.25rem] font-bold ">
                    {width <= 450 ? "GHub" : "GameHub"}
                </h1>
                <SearchBar screenWidth={width} />
                {width <= 450 && (
                    <Menu
                        size={40}
                        cursor={"pointer"}
                        onClick={() => {
                            setIsMenu(true);
                        }}
                    />
                )}
            </div>
            <DarkMode screenWidth={width} />
        </div>
    );
};

export default NavBar;
