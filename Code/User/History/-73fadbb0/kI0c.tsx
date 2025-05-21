import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

const NavBar = () => {
    return (
        <div className="flex flex-row items-center px:10 sm:px-20 py-8 justify-between ">
            <div className="flex flex-row gap-8 w-[70%] items-center">
                <h1 className="text-[2.25rem] font-bold">GameHub</h1>
                <SearchBar />
            </div>
            <DarkMode />
        </div>
    );
};

export default NavBar;
