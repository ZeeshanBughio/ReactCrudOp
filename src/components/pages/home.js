import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const results = await axios.get('http://localhost:3001/users');
    setUser(results.data.reverse());
  }

  return (
    <div className='page-layout'>
      <div className='container-1440'>
        <div className='table-crud'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((user, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td className='action-table'>
                      <Link className='view'>View</Link>
                      <Link className='edit' to='/user/edit/:id'>Edit</Link>
                      <Link className='delete'>Delete</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home