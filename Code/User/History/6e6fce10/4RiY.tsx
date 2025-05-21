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

    onClick: () => void;
}
const Button = ({ type, onClick }: ButtonProps) => {
    return (
        <div className={`btn btn-${type} `} onClick={onClick}>
            {type.toUpperCase()}
        </div>
    );
};

export default Button;
