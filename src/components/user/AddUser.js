import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    const location = useNavigate();
    const [users, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    const { name , username, email, phone } = users;
    const onInputChange = e => {
        setUser({...users,[e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:3001/users',users);
        location('/');
    }

    return (
        <div className='page-layout'>
            <div className='container-1440'>
                <h1 className='text-heading text-center'>AddUser</h1>
                <form className='form-add-user' onSubmit={e => onSubmit(e)}>
                    <input required type='text' placeholder='Name' name='name' value={name} onChange={e => onInputChange(e)} />
                    <input required type='text' placeholder='User Name' name='username' value={username} onChange={e => onInputChange(e)} />
                    <input required type='email' placeholder='Email' name='email' value={email} onChange={e => onInputChange(e)} />
                    <input required type='number' placeholder='Phone Number' name='phone' value={phone} onChange={e => onInputChange(e)} />
                    <button type='submit' className='bg-purple'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser