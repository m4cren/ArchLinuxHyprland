import { Plus } from "lucide-react";
import Header from "./Header";
import { useTheme } from "../../contexts/ThemeContextProvider";

const icon_links = [
    "windows-brands",
    "playstation-brands",
    "apple-brands",
    "linux-brands",
    "xbox-brands",
];

const GameList = () => {
    const { themes } = useTheme();
    return (
        <div className="flex flex-col gap-15 mt-8 md:mt-0">
            <Header />
            <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 w-[100vw] lg:w-[63vw] justify-center md:justify-items-center">
                <li
                    className={`${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-[25rem] rounded-2xl  overflow-hidden`}
                >
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
                                className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                            />
                        ))}
                    </div>
                    <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">
                            Victor: The Savior
                        </h1>
                    </div>
                    <span
                        className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 mt-10 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                    >
                        <Plus size={20} />
                        <p className="text-[0.9rem]">982</p>
                    </span>
                </li>
                <li
                    className={`${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-[25rem] rounded-2xl  overflow-hidden`}
                >
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
                                className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                            />
                        ))}
                    </div>
                    <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">
                            Victor: The Savior
                        </h1>
                    </div>
                    <span
                        className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 mt-10 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                    >
                        <Plus size={20} />
                        <p className="text-[0.9rem]">982</p>
                    </span>
                </li>
                <li
                    className={`${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-[25rem] rounded-2xl  overflow-hidden`}
                >
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
                                className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                            />
                        ))}
                    </div>
                    <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">
                            Victor: The Savior
                        </h1>
                    </div>
                    <span
                        className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 mt-10 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                    >
                        <Plus size={20} />
                        <p className="text-[0.9rem]">982</p>
                    </span>
                </li>
                <li
                    className={`${themes === "dark" ? "bg-[#1C1D1E] " : "bg-[#f5f5f5] [box-shadow:-2px_2px_6px_rgba(0,0,0,0.2)]"} w-[23rem] h-[25rem] rounded-2xl  overflow-hidden`}
                >
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
                                className={`w-[1.2rem] h-[1.2rem] ${themes === "light" && "invert"}`}
                            />
                        ))}
                    </div>
                    <div className="pl-5">
                        <h1 className="text-[1.75rem] font-medium">
                            Victor: The Savior
                        </h1>
                    </div>
                    <span
                        className={`${themes === "dark" ? "bg-[#373737]" : "bg-[#f5f5f5] [box-shadow:-1px_1px_3px_rgba(0,0,0,0.2)]"} flex ml-5 mt-10 flex-row gap-2 items-center justify-center px-2 py-1 w-[4rem]  rounded-sm`}
                    >
                        <Plus size={20} />
                        <p className="text-[0.9rem]">982</p>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default GameList;
