import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';


const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://project-x6ig.onrender.com/user/create', { name, email, address })
            .then(result => {
                console.log(result.data.users);
            })
            .catch(error => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div className="container">
    <h1>Create User</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text" 
                placeholder=" " 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <label>Name</label>
        </div>
        <div>
            <input 
                type="email" 
                placeholder=" " 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label>Email</label>
        </div>
        <div>
            <input 
                type="text" 
                placeholder=" " 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
            />
            <label>Address</label>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
    );
};

export default Create;