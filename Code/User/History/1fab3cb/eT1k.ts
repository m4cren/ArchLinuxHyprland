import { BlogStateType } from "@/types/types";

export async function createBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
    console.log('create blog')
    return {msg: 'create'}
}
export async function updateBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
    console.log('update blog')
    return {msg: 'success'}
}