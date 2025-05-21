import { useRef, useState } from "react";

type PizzaType = {
    name: string;
    toppings: string[];
};
const App = () => {
    const inpureRef = useRef<HTMLInputElement>(null);
    const [pizza, setPizza] = useState<PizzaType>({
        name: "Spice Peperroni",
        toppings: ["Dave", "Katerina", "Pepper"],
    });

    const addToppings = (toppingsS: string) => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, toppingsS] });
    };
    return (
        <div>
            <h1>{pizza.name}</h1>
            <p>Toppings: {pizza.toppings.map((toppings) => toppings + ", ")}</p>
            <div>
                <button
                    onClick={() => {
                        if (inpureRef.current)
                            addToppings(inpureRef.current.value);
                    }}
                >
                    Add toppings:
                </button>
                <input ref={inpureRef} type="text" />
            </div>
        </div>
    );
};

export default App;
