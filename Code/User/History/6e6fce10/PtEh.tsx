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

    setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button = ({ type, setIsClick }: ButtonProps) => {
    return (
        <div className={`btn btn-${type} `} onClick={() => setIsClick(true)}>
            {type.toUpperCase()}
        </div>
    );
};

export default Button;
