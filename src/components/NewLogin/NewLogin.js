import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

const AllUsers = () => {
    const { allUsers, changeUser } = useContext(AppContext)
    return (
        
            <div>
                {
                    allUsers.map((user) => {
                        return (
                            <Link key={user.id} to='/'>
                                <li onClick={() => changeUser(user.id)}>{user.name}</li>
                            </Link>
                        ) 
                    })
                } 
            </div>
    )
}
export default AllUsers