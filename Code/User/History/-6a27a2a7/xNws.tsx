import { useEffect, useState } from "react";
import create from "../services/http-service";
import type { UserType } from "../types";

const useDataFetch = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const { request, cancel } = create("/users").getAllEntity<UserType[]>();
        setIsLoading(true);
        request
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });

        return () => cancel();
    }, []);

    const handleDelete = (user: UserType) => {
        const originalUsers = [...users];
        setUsers(users.filter(({ id }) => id !== user.id));
        create("/users")
            .deleteEntity<UserType>(user)
            .catch((err) => {
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

        create("/users")
            .addEntity<UserType>(newUser)
            .then((res) => setUsers([res.data, ...users]));
    };
    const updateUser = (user: UserType) => {
        const updatedUser: UserType = { ...user, name: `${user.name}!!!` };
        setUsers(
            users.map((userr) => (userr.id === user.id ? updatedUser : userr)),
        );
        create("/users")
            .updateEntity<UserType>(user)
            .catch((err) => console.log(err));
    };

    return [users, isLoading, updateUser, handleDelete, addUser];
};

export default useDataFetch;
