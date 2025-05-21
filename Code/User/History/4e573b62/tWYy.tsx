import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

type PersonType = {
    name: string;
    age: number;
};
const Form = () => {
    const [person, setPerson] = useState<PersonType>({
        name: "",
        age: 0,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(person);
        setPerson({
            name: "",
            age: 0,
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    onChange={handleChange}
                    type="text"
                    value={person.name}
                    className="form-control"
                    name="name"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    onChange={handleChange}
                    name="age"
                    value={person.age}
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
