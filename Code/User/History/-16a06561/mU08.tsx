import type { ReactNode } from "react";

interface ExpandableTextProps {
    children: ReactNode;
    maxLenght: number;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandableText = ({
    children,
    maxLenght,
    state,
    setState,
}: ExpandableTextProps) => {
    return (
        <p>
            {state
                ? children
                : children?.toString().slice(0, maxLenght) + "..."}{" "}
            <button onClick={() => setState(!state)}>More</button>
        </p>
    );
};

export default ExpandableText;
