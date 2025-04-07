const User = () => {
    const users = [
      {
        id: 1,
        username: "John Doe",
        email: "xyz@gmail.com",
        password: "1234567890",
      },
    ];
  
    return (
      <div className="content">
        <h2 className="page-title">Active Users</h2>
  
        <table className="styled-table">
          <thead>
            <tr>
              <th>Register</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn-block">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default User;
  