import { ToggleLeft, ToggleRight } from "lucide-react";

const DarkMode = ({ screenWidth }: { screenWidth: number }) => {
    return (
        <button
            className={`${screenWidth <= 450 && "hidden"} flex flex-row items-center gap-3`}
        >
            <ToggleRight size={40} />
            <h5 className="text-[1.3rem]">Dark Mode</h5>
        </button>
    );
};

export default DarkMode;
