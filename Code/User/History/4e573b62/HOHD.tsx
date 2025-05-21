import { useRef } from "react";

const Form = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    return (
        <form action="">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    ref={nameRef}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    ref={ageRef}
                    id="age"
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
