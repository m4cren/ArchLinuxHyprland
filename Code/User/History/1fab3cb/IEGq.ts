"use server";
import getUserAuth from "@/lib/getAuthUser";
import { BlogFormSchema } from "@/lib/rules";
import { getCollection } from "@/server/database";
import { BlogStateType, BlogType, UserSessionType } from "@/types/types";

import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export async function createBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const user = (await getUserAuth()) as UserSessionType;

    if (!user) redirect("/");
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const validatedFields = await BlogFormSchema.safeParse({
        title: title,
        content: content,
    });

    if (validatedFields.success) {
        const blogCollection = await getCollection("blogs");

        if (blogCollection) {
            await blogCollection?.insertOne({
                title: validatedFields.data.title,
                content: validatedFields.data.content,
                userId: ObjectId.createFromHexString(user.userId),
            });
            redirect("/");
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

export async function getBlogs(blogId: string) {
    const blogCollection = await getCollection("blogs");
    const blog = blogCollection?.findOne({ blogId });

    console.log(blog);
}
