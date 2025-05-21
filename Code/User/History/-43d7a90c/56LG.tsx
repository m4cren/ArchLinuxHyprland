import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}
const Alert = ({ onClick, children }: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                onClick={onClick}
            ></button>
        </div>
    );
};

export default Alert;
