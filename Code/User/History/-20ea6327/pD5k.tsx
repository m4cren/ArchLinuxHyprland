import { ToggleRight, ToggleLeft } from "lucide-react";

const DarkMode = () => {
    return (
        <div className="w-[12rem] flex flex-row items-center gap-2">
            <button>
                <ToggleRight />
            </button>
            <h5>Dark Mode</h5>
        </div>
    );
};

export default DarkMode;
