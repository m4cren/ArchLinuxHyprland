import layout from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={layout.main}>
            <nav className="text-white font-bol bg-amber-300">
                <h3>NavBar</h3>
            </nav>
            <main className="text-white font-bol bg-amber-900">Main</main>
            <aside className="text-white font-bol bg-amber-600 ">Aside</aside>
        </div>
    );
};

export default MainLayout;
