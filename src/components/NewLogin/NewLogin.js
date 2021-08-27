import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'
import styles from './NewLogin.module.css'

const AllUsers = () => {
    const { allUsers, changeCurrentUser } = useContext(AppContext)
    return (
        
            <div>
                {
                    allUsers.map((user) => {
                        return (
                            <Link key={user.id} to='/' className={styles.link}>
                                <li onClick={() => changeCurrentUser(user.id)}>{user.name}</li>
                            </Link>
                        ) 
                    })
                } 
            </div>
    )
}
export default AllUsers