import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'
import styles from './NewConversation.module.css'

const NewConversation = () => {
    const { allUsers, startNewConversation } = useContext(AppContext)

    return (
        <div>
            {
                allUsers.map((user) => {
                    return <Link to='/' className={styles.link}>
                            <li key={user.id} onClick={() => startNewConversation(user)}>
                                {user.name}
                            </li>
                        </Link>
                })
            }

        </div>
    )
}

export default NewConversation