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
        return apiClient.delete(`/users/${user.id}`);
    }

    updateUser(user: UserType, updatedUser: UserType) {
        return apiClient.patch(`/users/${user.id}`, updatedUser);
    }
}
export default new UserService();
