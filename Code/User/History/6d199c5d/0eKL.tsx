import MainLayout from "./layout/MainLayout";

const App = () => {
    return (
        <div
            className={`w-full h-fit ${theme === "dark" ? "bg-[#111111] text-[#f5f5f5]" : "text-[#111111] bg-[#f5f5f5]"}`}
        >
            <MainLayout />
        </div>
    );
};

export default App;
