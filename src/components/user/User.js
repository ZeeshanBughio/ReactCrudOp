import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const User = () => {
    const location = useNavigate();
    const {id} = useParams();
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
        location('/');
    }

    const loadUser = async () => {
        const results = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(results.data);
    }

    useEffect(() => {
        loadUser(); 
    }, []);

    return (
        <div className='page-layout'>
            <div className='container-1440'>
                <h1 className='text-heading text-center'>Edit User</h1>
                <form className='form-add-user' onSubmit={e => onSubmit(e)}>
                    <input readOnly required type='text' placeholder='Name' name='name' value={name} onChange={e => onInputChange(e)} />
                    <input readOnly required type='text' placeholder='User Name' name='username' value={username} onChange={e => onInputChange(e)} />
                    <input readOnly required type='email' placeholder='Email' name='email' value={email} onChange={e => onInputChange(e)} />
                    <input readOnly required type='number' placeholder='Phone Number' name='phone' value={phone} onChange={e => onInputChange(e)} />
                    <button type='submit' className='bg-purple'>Back</button>
                </form>
            </div>
        </div>
    )
}

export default User