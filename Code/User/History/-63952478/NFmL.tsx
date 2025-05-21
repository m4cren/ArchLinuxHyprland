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
        <div>
            <h3 className="font-medium text-[1.5rem]">Genres</h3>
            <ul className="flex flex-col gap-2">
                <li className="list-none flex flex-row gap-2">
                    <div className="w-[3rem] h-[3rem] rounded-2xl bg-[#f5f5f5]"></div>
                    <p className="font-extralight">Action</p>
                </li>
                <li className="list-none flex flex-row gap-2">
                    <div className="w-[3rem] h-[3rem] rounded-2xl bg-[#f5f5f5]"></div>
                    <p className="font-extralight">Action</p>
                </li>
            </ul>
        </div>
    );
};

export default CategoryList;
