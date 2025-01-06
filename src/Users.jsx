import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://project-x6ig.onrender.com/user/fetchall")
            .then(result => {
                console.log(result.data);
                setUsers(result.data.users); 
            })
            .catch(error => {
                console.log("Error fetching users:", error);
            });
    }, []);

    return (
        <div class="table-container">
            <h1>Users</h1>
            <Link to="/create">Create User</Link>
            <table class="my-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link to={`/update/${user._id}`}>Update</Link>
                                <button type="submit" onClick={() => axios.delete(`https://project-x6ig.onrender.com/user/delete/${user._id}`)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;