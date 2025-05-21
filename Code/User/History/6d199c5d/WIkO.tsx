import { useState } from "react";
import MainLayout from "./layout/MainLayout";

const App = () => {
    const [isDarkMode, setIsDarkmode] = useState<boolean>(true);

    return (
        <div className="w-full h-screen bg-[#111111] text-[#f5f5f5]">
            <MainLayout />
        </div>
    );
};

export default App;
