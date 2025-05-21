import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import produce from "immer";

type arraysType = {
    id: number;
    name: string;
    isFix: boolean;
};
const App = () => {
    const [isCLick, setIsClick] = useState<boolean>(false);
    const [arrayss, setArrays] = useState<arraysType[]>([
        {
            id: 1,
            name: "Bug1",
            isFix: false,
        },
        {
            id: 2,
            name: "Bug2",
            isFix: false,
        },
    ]);

    const updateArray = () => {
        setArrays(
            produce((draft) => {
                const arrays1 = draft.find((arrayss) => arrayss.id === 1);
                if (arrays1) arrays1.isFix = true;
            }),
        );
    };
    return (
        <div>
            {arrayss.map(({ id, isFix, name }) => (
                <li key={id}>
                    <h1>{name}</h1>
                    <p>is fix? {isFix ? "Yes" : "No"}</p>
                </li>
            ))}
            {isCLick && (
                <Alert onClick={() => setIsClick(false)}>
                    <h1>Hello world</h1>
                </Alert>
            )}
            <Button
                type="dark"
                onClick={() => {
                    setIsClick(true);
                    updateArray();
                }}
            />
        </div>
    );
};

export default App;
