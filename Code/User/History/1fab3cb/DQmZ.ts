"use server";
import { BlogStateType } from "@/types/types";

export async function createBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    return { msg: "create" };
}
export async function updateBlog(
    state: BlogStateType,
    formData: FormData,
): Promise<BlogStateType> {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    return { msg: "success" };
}
