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

const CategoryList = () => {
    return (
        <div className="sticky top-5 pl-6 flex flex-col gap-6">
            <h3 className="font-medium text-[1.75rem]">Genres</h3>
            <ul className="flex flex-col gap-2 max-h-[75vh] overflow-y-scroll pb-20 [mask-image:linear-gradient(to_top,transparent,black_60%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_90%)] min-[580px]:[mask-image:linear-gradient(to_top,transparent,black_40%)]">
                {categories.map((cat, index) => (
                    <li
                        key={index}
                        className="list-none flex flex-row gap-2 items-center"
                    >
                        <div className="w-[3.5rem] h-[3.5rem] rounded-xl bg-[#f5f5f5]"></div>
                        <p className="text-[1.4rem] font-ight">{cat}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
