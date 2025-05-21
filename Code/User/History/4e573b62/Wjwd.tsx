import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
    name: z.string().min(3).trim(),
    age: z.number().min(17),
});

const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
