import React, { useState } from "react";

type CartType = {
    discount: number;
    items: {
        id: number;
        title: string;
        quantity: number;
    }[];
};
const App = () => {
    const [cart, setCart] = useState<CartType>({
        discount: 0.1,
        items: [
            { id: 1, title: "Product1", quantity: 1 },
            { id: 2, title: "Product2", quantity: 1 },
        ],
    });

    // const updateCart = ()=>{
    //     setCart({...cart, items: })
    // }
    return (
        <div>
            <h1>{cart.discount}</h1>
            <ul>
                {cart.items.map(({ id, quantity, title }) => (
                    <>
                        <h1>{title}</h1>
                        <p>id: {id}</p>
                        <p>quantity: {quantity}</p>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default App;
