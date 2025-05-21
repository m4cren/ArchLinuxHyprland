import { useState, type ReactNode } from "react";

interface ExpandableTextProps {
    children: ReactNode;
    maxChars?: number;
}

const ExpandableText = ({ maxChars = 100, children }: ExpandableTextProps) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    if (!children) return;
    if (children.toString().length <= maxChars) {
        return <p>{children}</p>;
    } else {
        return (
            <p>
                {isExpand
                    ? children
                    : children.toString().slice(0, maxChars) + "..."}
                <button onClick={() => setIsExpand(!isExpand)}>
                    {isExpand ? "Less" : "More"}
                </button>
            </p>
        );
    }
};

export default ExpandableText;
