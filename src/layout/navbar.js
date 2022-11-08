import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function navbar() {
  return (
    <div className='navbar bg-purple'>
        <div className='container-1440'>
            <div className='head-content'>
                <div className='logo'>
                    <Link to="/">
                        <h1>REACT</h1>
                    </Link>
                </div>
                <div className='links-head'>
                    <ul>
                        <li>
                            <NavLink to='/' end>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/props'>Props</NavLink>
                        </li>
                        <li>
                            <NavLink to='/alarm'>Alarm</NavLink>
                        </li>
                        <li className='adduser-btn'>
                            <Link to={'/user/add'}>Add User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar