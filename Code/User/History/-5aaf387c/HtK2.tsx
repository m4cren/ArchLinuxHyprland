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
                <NavBar
                    handleSelectedCategory={handleSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            </nav>
            <main className="">
                <GameList selectedCategory={selectedCategory} />
            </main>
            <aside className=" ">
                <CategoryList
                    handleSelectedCategory={handleSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            </aside>
            <footer className="flex flex-row gap-2 justify-center items-center">
                <h1>@m4cren</h1>
            </footer>
        </div>
    );
};

export default MainLayout;
