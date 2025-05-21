import produce from "immer";
import { useState } from "react";

type PlayerType = {
    id: number;
    name: string;
    isOnline: boolean;
};
const App = () => {
    const [player1, setPlayer1] = useState<PlayerType>({
        id: 2,
        name: "Bob",
        isOnline: true,
    });

    const updatePlayer = () => {
        setPlayer1(
            produce((draft) => {
                draft.isOnline = true;
            }),
        );
    };
    return (
        <div>
            <h1>{player1.name}</h1>
            <p>{player1.isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default App;
