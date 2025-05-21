"use server";
import { BlogFormSchema } from "@/lib/rules";
import { BlogStateType } from "@/types/types";

export async function createBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const validatedFields = BlogFormSchema.safeParse({
        title: title,
        content: content,
    });

    if (validatedFields) {
        return {};
    } else {
        return {
            error: validatedFields.error.flatten().fieldErrors,
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
