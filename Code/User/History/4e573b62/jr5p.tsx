import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
const Schema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be more than 3 characters" })
        .trim(),
    age: z
        .number({ invalid_type_error: "Age field is required" })
        .min(17, { message: "You must be 17 and above" }),
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
                {errors?.name && (
                    <p className="text-danger">{errors.name.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    {...register("age", { valueAsNumber: true })}
                    id="age"
                    className="form-control"
                />
                {errors?.age && (
                    <p className="text-danger">{errors.age.message}</p>
                )}
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
