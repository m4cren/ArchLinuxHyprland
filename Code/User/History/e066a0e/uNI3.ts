import apiClient from "./api-client";

export type UserType = {
    id: number;
    name: string;

    email: string;
};
class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient.get<UserType[]>("/users", {
            signal: controller.signal,
        });

        return { request, cancel: () => controller.abort() };
    }

    deleteUser(user: UserType) {
        const request = apiClient.delete(`/users/${user.id}`);
        return { request };
    }
}
export default new UserService();
