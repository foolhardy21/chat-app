import React, { useState } from 'react'
import users from './data/userdata'

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(0)
    const [allUsers, setAllUsers] = useState(users)
    const [currentFriend, setCurrentFriend] = useState(0)

    const changeFriend = (id) => {
        setCurrentFriend(id)
    }
    return (
        <AppContext.Provider
        value = {{
            currentUser,
            allUsers,
            currentFriend,
            changeFriend,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppProvider
}