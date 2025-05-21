import { Plus } from "lucide-react";
import Header from "./Header";

const icon_links = [
    "windows-brands",
    "playstation-brands",
    "apple-brands",
    "linux-brands",
    "xbox-brands",
];

const GameList = () => {
    return (
        <div className="flex flex-col gap-15">
            <Header />
            <ul className="grid grid-cols-3 gap-6 w-[65vw]">
                <li className="w-[23rem] h-[25rem] rounded-2xl bg-[#1C1D1E] overflow-hidden">
                    <img
                        src="/images/viktor.jpg"
                        alt="viktor"
                        className="max-h-[50%] w-full"
                    />
                    <div className="flex flex-row gap-3 items-center py-5 pl-5 opacity-60">
                        {icon_links.map((icons, index) => (
                            <img
                                key={index}
                                src={`/icons/${icons}.png`}
                                className="w-[1.2rem] h-[1.2rem]"
                            />
                        ))}
                    </div>
                    <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">
                            Victor: The Savior
                        </h1>
                    </div>
                    <span className="flex flex-row gap-2 items-center px-2 py-1 w-[5rem] bg-[#373737] rounded-sm">
                        <Plus />
                        <p>982</p>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default GameList;
