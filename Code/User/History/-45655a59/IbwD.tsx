import { useEffect, useState } from "react";
import axios from "axios";
type UserType = {
    id: number;
    name: string;

    email: string;
};
const UserList = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        axios
            .get<UserType[]>("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err));
    }, []);
    return <div>UserList</div>;
};

export default UserList;
