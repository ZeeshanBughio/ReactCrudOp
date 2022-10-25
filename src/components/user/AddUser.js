import React, { useState } from 'react'

function AddUser() {
    const [user, setUser] = useState({
        names: '',
        username: '',
        email: '',
        phone: ''
    })

    const {names , username, email, phone } = user;
    const onInputchange = e => {
        setUser(...user,{[e.target.name]: e.target.value})
    }

    return (
        <div className='page-layout'>
            <div className='container-1440'>
                <h1 className='text-heading text-center'>AddUser</h1>
                <form className='form-add-user'>
                    <input type='text' placeholder='Name' value={names} onChange={e => onInputchange(e)} />
                    <input type='text' placeholder='User Name' value={username} onChange={e => onInputchange(e)} />
                    <input type='text' placeholder='Email' value={email} onChange={e => onInputchange(e)} />
                    <input type='text' placeholder='Phone Number' value={phone} onChange={e => onInputchange(e)} />
                    <button type='submit' className='bg-purple'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser