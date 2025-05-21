import useDataFetch from "../hooks/useDataFetch";

const UserList = () => {
    const { addUser, handleDelete, isLoading, updateUser, users } =
        useDataFetch();

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
