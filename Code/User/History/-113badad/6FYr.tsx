import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeContextProvider from "./contexts/ThemeContextProvider.tsx";
import WindowSizeContextProvider from "./contexts/WindowSizeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeContextProvider>
            <WindowSizeContextProvider>
                <App />
            </WindowSizeContextProvider>
        </ThemeContextProvider>
    </StrictMode>,
);
