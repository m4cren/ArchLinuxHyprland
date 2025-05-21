import CategoryList from "../components/aside/CategoryList";
import GameList from "../components/main/GameList";
import NavBar from "../components/navbar/NavBar";
import layout from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={layout.main}>
            <nav className="">
                <NavBar />
            </nav>
            <main className="">
                <GameList />
            </main>
            <aside className=" ">
                <CategoryList />
            </aside>
        </div>
    );
};

export default MainLayout;
