import layout from "./main.module.css";

const MainLayout = () => {
    return (
        <div className={layout.main}>
            <nav></nav>
            <main></main>
            <aside></aside>
        </div>
    );
};

export default MainLayout;
