import { useState } from "react";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import ClearCart from "./components/ClearCart";

const App = () => {
    const [cartItem, setCartItem] = useState<string[]>([
        "Product1",
        "Product2",
        "Product3",
    ]);
    const clearCart = () => {
        setCartItem([]);
    };
    return (
        <main>
            <Nav cartItemCount={cartItem.length} />
            <Cart cartItem={cartItem} />
            <ClearCart onClear={clearCart} />
        </main>
    );
};

export default App;
