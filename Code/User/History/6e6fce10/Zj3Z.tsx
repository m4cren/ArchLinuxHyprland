interface ButtonProps {
    type:
        | "primary"
        | "danger"
        | "secondary"
        | "success"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "link";
}
const Button = ({ type }: ButtonProps) => {
    return <div className={`btn btn-${type} `}>{type.toUpperCase()}</div>;
};

export default Button;
