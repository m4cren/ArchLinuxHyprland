import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import { useTheme } from "./contexts/ThemeContextProvider";

const App = () => {
    const theme = useTheme();
    return (
        <div
            className={`w-full h-fit ${theme === "dark" ? "bg-[#111111] text-[#f5f5f5]" : "text-[#111111] bg-[#f5f5f5]"}`}
        >
            <MainLayout />
        </div>
    );
};

export default App;
