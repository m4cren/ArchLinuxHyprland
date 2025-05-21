import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert = ({ setIsClick, children }: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show">
            {children}
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
