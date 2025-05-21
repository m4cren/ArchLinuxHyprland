import { useState } from "react";
import MainLayout from "./layout/MainLayout";

const App = () => {
    const [isDarkMode, setIsDarkmode] = useState<boolean>(true);
    const handleDarkMode = () => {
        setIsDarkmode(!isDarkMode);
    };

    return (
        <div
            className={`w-full h-fit ${isDarkMode ? "bg-[#111111] text-[#f5f5f5]" : "text-[#111111] bg-[#f5f5f5]"}`}
        >
            <MainLayout handleDarkMode={handleDarkMode} />
        </div>
    );
};

export default App;
