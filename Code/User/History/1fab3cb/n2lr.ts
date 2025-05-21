'use server'
import { BlogStateType } from "@/types/types";

export async function createBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
  
    return {msg: 'create'}
}
export async function updateBlog(state: BlogStateType, formData: FormData): Promise<BlogStateType>{
  
    return {msg: 'success'}
}