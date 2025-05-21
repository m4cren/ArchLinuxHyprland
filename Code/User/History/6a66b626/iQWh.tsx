import { useState } from "react";
import Cart from "./components/Cart";
import Nav from "./components/Nav";

const App = () => {
    const [cartItem, setCartItem] = useState<string[]>([
        "Product1",
        "Product2",
        "Product3",
    ]);
    return (
        <main>
            <Nav cartItemCount={cartItem.length} />
            <Cart cartItem={cartItem} />
        </main>
    );
};

export default App;
