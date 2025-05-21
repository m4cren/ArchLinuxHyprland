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
        <div className="pl-6 flex flex-col gap-4">
            <h3 className="font-medium text-[1.75rem]">Genres</h3>
            <ul className="flex flex-col gap-2 max-h-[75vh] ">
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
