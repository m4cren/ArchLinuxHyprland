import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
    const [state, setState] = useState<boolean>(false);
    return (
        <main>
            <ExpandableText setState={setState} maxLenght={10} state={state}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                quidem sit sed, blanditiis nobis deserunt repudiandae aspernatur
                numquam? At harum, praesentium error ipsa, adipisci doloribus,
                fugiat possimus illum ex dignissimos eius facilis quia rem
                temporibus consectetur non tempore ullam. Voluptates nulla
                reiciendis impedit facilis temporibus quibusdam dicta, unde quos
                explicabo. Quidem totam architecto, quibusdam nostrum omnis
                soluta sed cupiditate similique, deserunt numquam et magni vitae
                modi, nobis eaque dolorem ut! Culpa dignissimos odio beatae
                nulla, quia quibusdam aut in fuga similique porro iure tempora
                ullam dolores autem molestias id incidunt tenetur, voluptatem
                asperiores non recusandae velit consectetur! Asperiores,
                laboriosam? Distinctio?
            </ExpandableText>
        </main>
    );
};

export default App;
