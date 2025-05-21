import { RegisterFormSchema } from "@/lib/rules";
import { z } from "zod";
export type AuthStateType = {
    msg?: string;
    error?: any;
    email?: string;
};
export type BlogStateType = {
    msg?: string;
    error?: any;
    title?: string;
    content?: string;
};

export type BlogType = {
    _id: string;
    title: string;
    content: string;
    userId: string;
};

export type UserSessionType = {
    userId: string;
    expiresAt: string;
    iat: number;
    exp: number;
};

export type FormDataType = z.infer<typeof RegisterFormSchema>;
