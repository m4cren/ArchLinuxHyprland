import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
    const [state, setState] = useState<boolean>(false);
    return (
        <main>
            <ExpandableText maxLenght={7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptatum doloremque nihil eos explicabo libero magni ducimus
                voluptatem minima adipisci ut, harum unde consequuntur! Illo aut
                est necessitatibus ullam iusto?{" "}
            </ExpandableText>
            <button>More</button>
        </main>
    );
};

export default App;
