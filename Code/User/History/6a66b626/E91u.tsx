import produce from "immer";
import { useState } from "react";

type PlayerType = {
    id: number;
    player: {
        name: string;
    };
};
const App = () => {
    const [player1, setPlayer1] = useState<PlayerType>({
        id: 2,
        player: {
            name: "Bob",
        },
    });

    const updatePlayer = () => {
        setPlayer1({
            ...player1,
            player: { ...player1.player, name: "Sentry" },
        });
    };
    return (
        <div>
            <h1>{player1.player.name}</h1>
            <button onClick={updatePlayer}>Make Bob evolve to Sentry</button>
        </div>
    );
};

export default App;
