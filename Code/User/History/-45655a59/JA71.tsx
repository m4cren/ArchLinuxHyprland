import { useEffect, useState } from "react";
import axios from "axios";
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
        setUsers(users.filter(({ id }) => id !== user.id));
        axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`);
    };
    return !isLoading ? (
        <ul className="list-group">
            {users.map((user) => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={user.id}
                >
                    <h1>{user.name}</h1>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(user)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    ) : (
        <div className="spinner-border"></div>
    );
};

export default UserList;
