interface Props {
    setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert = ({ setIsClick }: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show">
            <h1>Hello world</h1>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                onClick={() => setIsClick(false)}
            ></button>
        </div>
    );
};

export default Alert;
