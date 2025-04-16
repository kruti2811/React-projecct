import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();
        console.log("Users fetched:", data); // Debugging line
        setUsers(data); // Set users data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>User List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-users">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .admin-dashboard {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #fff;
        }

        .table-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        table {
          width: 80%;
          border-collapse: collapse;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          font-weight: bold;
          color: #444;
        }

        td {
          background-color: #f9f9f9;
        }

        td:hover {
          background-color: #e8f0fe;
        }

        .no-users {
          text-align: center;
          font-style: italic;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default User;
