import { ToggleRight, ToggleLeft } from "lucide-react";

const DarkMode = () => {
    return (
        <div className="w-[12rem]">
            <button>
                <ToggleRight />
            </button>
            <h5>Dark Mode</h5>
        </div>
    );
};

export default DarkMode;
