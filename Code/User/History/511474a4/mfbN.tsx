import { useTheme } from "../../contexts/ThemeContextProvider";

interface HeaderProps {
    selectedCategory: string;
}
const Header = ({ selectedCategory }: HeaderProps) => {
    const { themes } = useTheme();

    return (
        <div className="flex flex-col gap-4 px-6 md:px-10 md:py-8 lg:px-0">
            <h1 className="font-extrabold text-[3.25rem] md:text-[4rem] leading-14">
                {selectedCategory}
            </h1>
            <div className="flex flex-row gap-2 md:gap-4">
                <select
                    className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}   transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] rounded-md px-2 md:px-4 py-1 md:py-2`}
                >
                    <option disabled={true}>Platforms</option>
                    <option>Windows</option>
                    <option>PlayStation</option>
                    <option>Apple</option>
                    <option>Xbox</option>
                    <option>Linux</option>
                </select>

                <select
                    className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}    transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem]  rounded-md px-2 md:px-4 py-1 md:py-2`}
                >
                    <option>Order by: Relevance</option>
                    <option>Order by: Date Added</option>
                    <option>Order by: Name</option>
                    <option>Order by: Release Date</option>
                    <option>Order by: Popularity</option>
                    <option>Order by: Average Rating</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
