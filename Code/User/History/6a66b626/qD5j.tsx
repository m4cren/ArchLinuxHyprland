import React, { useState } from "react";

const App = () => {
    const [cart, setCart] = useState<>({
        discount: 0.1,
        items: [
            { id: 1, title: "Product1", quantity: 1 },
            { id: 1, title: "Product1", quantity: 1 },
        ],
    });
    return <div>App</div>;
};

export default App;
