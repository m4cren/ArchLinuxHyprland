import type { ReactNode } from "react";

interface ExpandableTextProps {
    children: ReactNode;
    maxLenght: number;
}

const ExpandableText = ({ children, maxLenght }: ExpandableTextProps) => {
    return <p>{children}</p>;
};

export default ExpandableText;
