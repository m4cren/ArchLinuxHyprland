import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
    const [state, setState] = useState<boolean>(false);
    return (
        <ExpandableText maxLenght={}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            voluptatum doloremque nihil eos explicabo libero magni ducimus
            voluptatem minima adipisci ut, harum unde consequuntur! Illo aut est
            necessitatibus ullam iusto?{" "}
        </ExpandableText>
    );
};

export default App;
