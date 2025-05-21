"use server";
import getUserAuth from "@/lib/getAuthUser";
import { BlogFormSchema } from "@/lib/rules";
import { getCollection } from "@/server/database";
import { BlogStateType, BlogType } from "@/types/types";
import { JWTPayload } from "jose";
import { ObjectId } from "mongodb";
import { title } from "process";

export async function createBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const user = await getUserAuth();
    console.log(user);
    if (!user) return { msg: "not authenticated" };
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const validatedFields = await BlogFormSchema.safeParse({
        title: title,
        content: content,
    });

    if (validatedFields.success) {
        const blogCollection = await getCollection("blogs");

        if (blogCollection) {
            const newBlogs = await blogCollection?.insertOne({
                title: validatedFields.data.title,
                content: validatedFields.data.content,
            });

            return {
                msg: "successfully inserting on the database",
            };
        } else {
            return {
                msg: "database error",
            };
        }
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

export async function fetchBlogs(): Promise<BlogType[]> {
    return [{ title: "", content: "" }];
}
