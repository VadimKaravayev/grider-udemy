function UserList({ users }) {
  const renderedUsers = users.map(({ name, email }) => {
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
