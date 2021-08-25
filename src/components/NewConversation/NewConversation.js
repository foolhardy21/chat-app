import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

const NewConversation = () => {
    const { allUsers, startNewConversation } = useContext(AppContext)

    return (
        <div>
            {
                allUsers.map((user) => {
                    return <li key={user.id} onClick={() => startNewConversation(user)}>
                        <Link to='/'>
                            {user.name}
                        </Link>
                    </li>
                })
            }

        </div>
    )
}

export default NewConversation