import { cookies } from "next/headers";
import { decrypt } from "./session";
import { UserSessionType } from "@/types/types";

export default async function getUserAuth(): Promise<UserSessionType | null> {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;

    if (session) {
        const user = await decrypt(session);
        return user as UserSessionType;
    } else {
        return null;
    }
}
