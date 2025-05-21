import CategoryList from "../components/aside/CategoryList";
import NavBar from "../components/navbar/NavBar";
import layout from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={layout.main}>
            <nav className="">
                <NavBar />
            </nav>
            <main className="text-white font-bol bg-amber-900"></main>
            <aside className=" ">
                <CategoryList />
            </aside>
        </div>
    );
};

export default MainLayout;
