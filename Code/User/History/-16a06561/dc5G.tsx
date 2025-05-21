interface ExpandableTextProps {
    children: string;
    maxLenght: number;
}

const ExpandableText = ({ children, maxLenght }: ExpandableTextProps) => {
    return <p>{children}</p>;
};

export default ExpandableText;
