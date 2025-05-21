import { createContext, useContext, useEffect, useState } from "react";

interface WindowSizeContextProps {
    screenWidth: number;
}
const WindowSizeContext = createContext<WindowSizeContextProps | null>(null);

const WindowSizeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [screenWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <WindowSizeContext.Provider value={{ screenWidth }}>
            {children}
        </WindowSizeContext.Provider>
    );
};

export default WindowSizeContextProvider;

export const useWindowResize = () => {
    const ctx = useContext(WindowSizeContext);
    if (!ctx) {
        throw new Error("error hehe");
    }
    return ctx;
};
