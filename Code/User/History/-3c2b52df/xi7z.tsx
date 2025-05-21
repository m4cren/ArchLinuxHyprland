import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <>
            <form
                action=""
                className="relative flex flex-row items-center w-[70%]"
            >
                <span className="absolute left-5">
                    <Search />
                </span>
                <input
                    type="text"
                    className="bg-[#3B3B3B] rounded-full w-full h-[3rem] pl-15"
                    placeholder="Search games..."
                />
            </form>
        </>
    );
};

export default SearchBar;
