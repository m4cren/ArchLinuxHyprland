import { useState } from "react";
import CategoryList from "../components/aside/CategoryList";
import GameList from "../components/main/GameList";
import NavBar from "../components/navbar/NavBar";
import layout from "./main.module.css";

const MainLayout = () => {
    const [selectedCategory, setSelectectedCategory] =
        useState<string>("Action");

    const handleSelectedCategory = (category: string) => {
        setSelectectedCategory(category);
    };
    return (
        <div className={layout.main}>
            <nav className="">
                <NavBar handleSelectedCategory={handleSelectedCategory} />
            </nav>
            <main className="">
                <GameList selectedCategory={selectedCategory} />
            </main>
            <aside className=" ">
                <CategoryList handleSelectedCategory={handleSelectedCategory} />
            </aside>
        </div>
    );
};

export default MainLayout;
