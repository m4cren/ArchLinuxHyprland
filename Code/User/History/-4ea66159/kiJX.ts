import { ObjectId } from "mongodb";

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
    title: string;
    content: string;
};

export type UserSessionType = {
    userId: string;
    expiresAt: string;
    iat: number;
    exp: number;
};
