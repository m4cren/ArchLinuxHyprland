import { useTheme } from "./contexts/ThemeContextProvider";
import MainLayout from "./layout/MainLayout";

const App = () => {
    const { themes } = useTheme();
    return (
        <div
            className={`w-full h-fit ${themes === "dark" ? "bg-[#111111] text-[#f5f5f5]" : "text-[#111111] bg-[#f5f5f5]"} transition duration-200`}
        >
            <MainLayout />
        </div>
    );
};

export default App;
