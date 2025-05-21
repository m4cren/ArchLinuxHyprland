import { useTheme } from "../../contexts/ThemeContextProvider";
import { useWindowResize } from "../../contexts/WindowSizeContextProvider";

const categories = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
];

interface CategoryListProps {
    handleSelectedCategory: (category: string) => void;
    selectedCategory: string;
}

const CategoryList = ({
    handleSelectedCategory,
    selectedCategory,
}: CategoryListProps) => {
    const { themes } = useTheme();
    const { screenWidth } = useWindowResize();
    return (
        <div className="sticky top-5 pl-6 flex flex-col gap-6">
            <h3 className="font-medium text-[1.75rem]">Genres</h3>
            <ul
                className={`${screenWidth >= 450 && "[mask-image:linear-gradient(to_top,transparent,black_60%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_90%)] min-[580px]:[mask-image:linear-gradient(to_top,transparent,black_40%)]"} flex flex-col gap-2 max-h-[75vh] overflow-y-scroll pb-80 `}
            >
                {categories.map((cat, index) => (
                    <li
                        key={index}
                        className={`${cat === selectedCategory && "font-bold underline"} cursor-pointer hover:translate-x-3 transition duration-200 list-none flex flex-row gap-2 items-center`}
                        onClick={() => handleSelectedCategory(cat)}
                    >
                        <div
                            className={`${themes === "dark" ? "bg-[#f5f5f5]" : "bg-[#2c2c2c]"} transition duration-200 w-[3.5rem] h-[3.5rem] rounded-xl `}
                        ></div>
                        <p className="text-[1.4rem] font-ight">{cat}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
