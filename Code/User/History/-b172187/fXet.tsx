import { LogOut } from "lucide-react";
import DarkMode from "../navbar/DarkMode";
import { useTheme } from "../../contexts/ThemeContextProvider";

const MenuPhone = ({
    handleToggle,
}: {
    handleToggle: (action: "toggle" | "untoggle") => void;
}) => {
    const { themes } = useTheme();
    return (
        <div
            className={`${themes === "dark" ? "bg-[rgba(0,0,0,0.7)]" : "bg-[rgba(255,255,255,0.1)]"} toggle-menu fixed z-1 h-[94vh] w-[80vw] transition durion-200  backdrop-blur-2xl right-0 bottom-0 rounded-l-2xl border-1 border-[rgba(255,255,255,0.3)] pointer-events-auto`}
        >
            <div className="flex flex-row justify-between px-6 py-8 items-center">
                <DarkMode />
                <LogOut
                    onClick={() => handleToggle("untoggle")}
                    cursor={"pointer"}
                    size={30}
                />
            </div>
        </div>
    );
};

export default MenuPhone;
