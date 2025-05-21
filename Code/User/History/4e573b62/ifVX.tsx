import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";

type PersonType = {
    name: string;
    age: number;
};
const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    {...register("name")}
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
                    {...register("age")}
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
