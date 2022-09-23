import React, { useState, useEffect } from "react";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    displayUsers();
  }, []);

  const displayUsers = () => {
    const myHeaders = {
      "Content-Type": "application/json",
    };
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        console.log("Users result", result);
      });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Credit</th>
            <th>Cash</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.credit}</td>
              <td>${user.cash}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
