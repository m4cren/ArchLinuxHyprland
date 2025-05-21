import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
const Schema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be more than 3 characters" })
        .trim(),
    age: z.number().min(17, { message: "You must be 17 and above" }),
});

type SchemaType = z.infer<typeof Schema>;

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SchemaType>({
        resolver: zodResolver(Schema),
    });

    const onSubmit = (data: FieldValues) => {};
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
