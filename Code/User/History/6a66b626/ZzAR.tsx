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
    return <div>App</div>;
};

export default App;
