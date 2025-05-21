import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/api-client";
type UserType = {
    id: number;
    name: string;

    email: string;
};
const UserList = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        axios
            .get<UserType[]>("https://jsonplaceholder.typicode.com/users", {
                signal: controller.signal,
            })
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    const handleDelete = (user: UserType) => {
        const originalUsers = [...users];
        setUsers(users.filter(({ id }) => id !== user.id));
        apiClient.delete(`/users/${user.id}`).catch((err) => {
            console.log(err);
            setUsers(originalUsers);
        });
    };
    const addUser = () => {
        const newUser: UserType = {
            id: 5,
            name: "Rainier",
            email: "renrenofficial@gmail.com",
        };
        setUsers([newUser, ...users]);

        apiClient
            .post("/users", newUser)
            .then((res) => setUsers([res.data, ...users]));
    };
    const updateUser = (user: UserType) => {
        const updatedUser: UserType = { ...user, name: `${user.name}!!!` };
        setUsers(
            users.map((userr) => (userr.id === user.id ? updatedUser : userr)),
        );

        apiClient
            .patch(`/users/${user.id}`, updatedUser)
            .catch((err) => console.log(err));
    };
    return !isLoading ? (
        <ul className="list-group">
            <button className="btn btn-primary" onClick={addUser}>
                Add user
            </button>
            {users.map((user) => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={user.id}
                >
                    <h1>{user.name}</h1>
                    <div className="d-flex gap-4">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => updateUser(user)}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDelete(user)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <div className="spinner-border"></div>
    );
};

export default UserList;
