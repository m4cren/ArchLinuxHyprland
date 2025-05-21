import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-row items-center px-5 lg:px-20 py-8 justify-between ">
            <div className="flex flex-row gap-8 w-[70%] items-center">
                <h1 className="text-[1.5rem] lg:text-[2.25rem] font-bold ">
                    {width}
                </h1>
                <SearchBar />
            </div>
            <DarkMode />
        </div>
    );
};

export default NavBar;
