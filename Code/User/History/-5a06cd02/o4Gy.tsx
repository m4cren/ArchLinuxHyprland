import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

interface ThemeContextProps {
    themes: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [themes, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        if (themes === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    useEffect(() => {
        const saved_theme = localStorage.getItem("theme");
        if (saved_theme === "dark") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);
    return (
        <ThemeContext.Provider value={{ themes, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return ctx;
};
