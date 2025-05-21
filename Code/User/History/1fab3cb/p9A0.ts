"use server";
import { BlogFormSchema } from "@/lib/rules";
import { getCollection } from "@/server/database";
import { BlogStateType } from "@/types/types";

export async function createBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const validatedFields = await BlogFormSchema.safeParse({
        title: title,
        content: content,
    });

    if (validatedFields.success) {
        const blogCollection = await getCollection("blogs");

        const newBlogs = await blogCollection?.insertOne({
            title: validatedFields.data.title,
            content: validatedFields.data.content,
        });

        return {
            msg: "success",
        };
    } else {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            title: title,
            content: content,
        };
    }
}
export async function updateBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    return { msg: "success" };
}
