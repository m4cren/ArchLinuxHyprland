import type { ReactNode } from "react";

interface ExpandableTextProps {
    children: ReactNode;
    maxLenght: number;
    state: boolean;
}

const ExpandableText = ({ children, maxLenght }: ExpandableTextProps) => {
    return <p>{children}</p>;
};

export default ExpandableText;
