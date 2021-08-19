import React, { useState } from 'react'
import users from './data/userdata'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
    
    const initialiseFriendsArray = () => {
        return users.filter( (item, index) => {
            if ( currentUser.friends.indexOf( index ) ) {
                return item
            } else {
                return null
            }
        })
    }
    
    const [currentUser, setCurrentUser] = useState( users[0] )
    const [friends, setAllFriends] = useState( initialiseFriendsArray() )
    const [currentFriend, setCurrentFriend] = useState( users[0] )

    const changeFriend = ( id ) => {
        const newfriend = friends.filter( friend => friend.id === id )
        setCurrentFriend( ...newfriend )
    }
    const findFriends = ( e ) => {
        const typedName = e.target.value
        if ( !typedName ) {
            setAllFriends( initialiseFriendsArray() )
        } else {
            let users = [ ...friends ]
            users = users.filter( item => item.name.toLowerCase().includes( typedName.toLowerCase() ) )
            setAllFriends( [...users] )
        }
        
        

    }
    return (
        <AppContext.Provider
        value = {{
            currentUser,
            friends,
            currentFriend,
            changeFriend,
            findFriends,
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