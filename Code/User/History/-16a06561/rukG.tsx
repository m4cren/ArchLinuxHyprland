import type { ReactNode } from "react";

interface ExpandableTextProps {
    children: ReactNode;
    maxLenght: number;
    state: boolean;
}

const ExpandableText = ({
    children,
    maxLenght,
    state,
}: ExpandableTextProps) => {
    return <p>{state ? children : children?.toString().slice(0, maxLenght)}</p>;
};

export default ExpandableText;
