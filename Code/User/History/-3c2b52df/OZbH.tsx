import { Search } from "lucide-react";

const SeachBar = () => {
    return (
        <form action="">
            <div className="relative flex flex-row items-center">
                <span className="absolute left-5">
                    <Search />
                </span>
                <input type="text" className="bg-[#3B3B3B] rounded-full" />
            </div>
        </form>
    );
};

export default SeachBar;
