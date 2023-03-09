export const UsersTable = ({ users }) => {
    return (
        <table className="table">
            <tr>
                <td>Mame</td>
                <td>Email</td>
                <td>Address</td>
                <td>Удалить</td>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>У</td>
                </tr>
            ))}
        </table>
    )
}