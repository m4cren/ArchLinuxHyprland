import NavBar from "../components/navbar/NavBar";
import layout from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={layout.main}>
            <nav className="text-white">
                <NavBar />
            </nav>
            <main className="text-white font-bol bg-amber-900"></main>
            <aside className="text-white font-bol bg-amber-600 "></aside>
        </div>
    );
};

export default MainLayout;
