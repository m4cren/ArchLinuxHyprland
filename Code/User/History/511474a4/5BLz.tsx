import { ChevronDown } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useState } from "react";
import DropDownOptions from "./DropDownOptions";

interface HeaderProps {
    selectedCategory: string;
}
const Header = ({ selectedCategory }: HeaderProps) => {
    const { themes } = useTheme();
    const [dropDownShow, setDropDownShown] = useState<
        null | "platform" | "order_by"
    >(null);

    const handleDropDown = (selector: "platform" | "order_by" | null) => {
        if (selector === "order_by") {
            setDropDownShown("order_by");
        } else if (selector === "platform") {
            setDropDownShown("platform");
        } else {
            setDropDownShown(null);
        }
    };
    return (
        <div className="flex flex-col gap-4 px-6 md:px-0">
            <h1 className="font-extrabold text-[3.25rem] md:text-[4rem] leading-14">
                {selectedCategory}
            </h1>
            <div className="flex flex-row gap-2 md:gap-4">
                <div>
                    <button
                        onClick={() => handleDropDown("platform")}
                        className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[1rem] rounded-md px-2 md:px-4 py-1 md:py-2`}
                    >
                        Platforms
                        <ChevronDown />
                    </button>
                    {dropDownShow === "platform" && <DropDownOptions />}
                </div>
                <div>
                    <button
                        onClick={() => handleDropDown("order_by")}
                        className={`${themes === "dark" ? "bg-[#212121]" : "bg-[#F7F8F3] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"}  transition duration-200 flex flex-row items-center gap-2 md:gap-4 text-[0.85rem] md:text-[1rem]  rounded-md px-2 md:px-4 py-1 md:py-2`}
                    >
                        Order by: Relevance
                        <ChevronDown />
                    </button>
                    {dropDownShow === "platform" && <DropDownOptions />}
                </div>
            </div>
        </div>
    );
};

export default Header;
