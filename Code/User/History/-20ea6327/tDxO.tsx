import { ToggleLeft, Menu } from "lucide-react";

const DarkMode = ({ screenWidth }: { screenWidth: number }) => {
    return (
        <button className={` flex flex-row items-center gap-3`}>
            {screenWidth <= 450 ? (
                <>
                    <Menu size={30} />
                </>
            ) : (
                <>
                    <ToggleLeft size={40} />
                    <h5 className="text-[1.3rem]">Dark Mode</h5>
                </>
            )}
        </button>
    );
};

export default DarkMode;
