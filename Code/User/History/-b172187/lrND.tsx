import { LogOut } from "lucide-react";

const MenuPhone = ({
    handleToggle,
}: {
    handleToggle: (action: "toggle" | "untoggle") => void;
}) => {
    return (
        <div className="fixed z-10 h-[90vh] w-[90vw] bg-[rgba(0,0,0,0.7)] backdrop-blur-2xl right-0 bottom-0 rounded-l-2xl border-1 border-[rgba(255,255,255,0.3)]">
            <LogOut onClick={() => handleToggle("untoggle")} />
        </div>
    );
};

export default MenuPhone;
