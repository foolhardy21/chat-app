import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

const AllUsers = () => {
    const { allUsers } = useContext(AppContext)
    return (
        <Link to='/'>
            <div>
                {
                    allUsers.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                } 
            </div>       
        </Link>
    )
}
export default AllUsers