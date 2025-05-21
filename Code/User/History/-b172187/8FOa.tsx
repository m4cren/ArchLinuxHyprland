import { LogOut } from "lucide-react";
import DarkMode from "../navbar/DarkMode";
import { useTheme } from "../../contexts/ThemeContextProvider";
import { useState } from "react";

const MenuPhone = ({
    handleToggle,
}: {
    handleToggle: (action: "toggle" | "untoggle") => void;
}) => {
    const { themes } = useTheme();
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            handleToggle("untoggle");
            setIsClosing(false);
        }, 295);
    };
    return (
        <div
            className={`${themes === "dark" ? "bg-[rgba(0,0,0,0.7)]" : "bg-[rgba(255,255,255,0.1)]"} ${isClosing && "untoggle-menu"} toggle-menu fixed z-1 h-[94vh] w-[80vw] transition durion-200  backdrop-blur-2xl right-0 bottom-0 rounded-l-2xl border-1 border-[rgba(255,255,255,0.3)] pointer-events-auto`}
        >
            <div className="flex flex-row justify-between px-8 py-8 items-center">
                <DarkMode />
                <LogOut onClick={handleClose} cursor={"pointer"} size={30} />
            </div>
        </div>
    );
};

export default MenuPhone;
