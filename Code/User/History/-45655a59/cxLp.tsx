import { use, useEffect, useState } from "react";
import axios from "axios";
type UserType = {
    id: number;
    name: string;

    email: string;
};
const UserList = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get<UserType[]>("https://jsonplaceholder.typicode.com/users", {
                signal: controller.signal,
            })
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err));

        return () => controller.abort();
    }, []);
    return (
        <ul className="list-group">
            {users.map(({ email, id, name }) => (
                <li className="list-item" key={id}>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
