import { LogOut } from "lucide-react";

const MenuPhone = ({
    handleToggle,
}: {
    handleToggle: (action: "toggle" | "untoggle") => void;
}) => {
    return (
        <aside className="">
            <LogOut onClick={() => handleToggle("untoggle")} />
        </aside>
    );
};

export default MenuPhone;
