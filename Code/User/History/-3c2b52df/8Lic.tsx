import { Search } from "lucide-react";

const SearchBar = ({ screenWidth }: { screenWidth: number }) => {
    return (
        <>
            <form
                action=""
                className={`relative flex flex-row items-center :w-[70%]`}
            >
                <span className={`absolute left-3 lg:left-5`}>
                    <Search />
                </span>
                <input
                    type="text"
                    className={`bg-[#3B3B3B] rounded-full w-full h-[2.5rem] lg:h-[3rem] pl-12 lg:pl-15`}
                    placeholder={`${screenWidth <= 450 ? "Search..." : "Search games..."}`}
                />
            </form>
        </>
    );
};

export default SearchBar;
