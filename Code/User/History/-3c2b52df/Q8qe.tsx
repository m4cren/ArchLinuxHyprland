import { Search } from "lucide-react";

const SearchBar = ({ screenWidth }: { screenWidth: number }) => {
    return (
        <>
            <form
                action=""
                className={`relative flex flex-row items-center w-[80%] bg-amber-50 lg:w-[70%]`}
            >
                <span className="absolute left-5">
                    <Search />
                </span>
                <input
                    type="text"
                    className={`bg-[#3B3B3B] rounded-full w-full h-[3rem] pl-15`}
                    placeholder={`${screenWidth <= 450 ? "Search..." : "Search games..."}`}
                />
            </form>
        </>
    );
};

export default SearchBar;
