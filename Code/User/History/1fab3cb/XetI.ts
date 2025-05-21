import { BlogStateType } from "@/types/types";

export async function createBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
    console.log('create blog 22222222222')
    return {msg: 'create'}
}
export async function updateBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
    console.log('update blog 33333333333')
    return {msg: 'success'}
}