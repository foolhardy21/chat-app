import React, { useState, useEffect } from 'react'
import users from './data/userdata'
import { conversations } from './data/messagedata'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    
    const initialiseFriendsArray = () => {
        return users.filter( (item, index) => {
            if ( currentUser.friends.indexOf( item.id ) !== -1 ) {
                return item
            } else {
                return null
            }
        })
    }
    const initialiseConversationArray = (user1, user2) => {
        let newconvo = conversations.filter(convo => {
            if( (convo.sender_id === user1 && convo.reciever_id === user2) 
                    || (convo.sender_id === user2 && convo.reciever_id === user1) ) {
                return convo
            } else {
                return null
            }
        })
        return newconvo 
    }
    const [currentUser, setCurrentUser] = useState( users[0] )
    const [friends, setAllFriends] = useState( initialiseFriendsArray() )
    const [currentFriend, setCurrentFriend] = useState( users[1] )
    const [messages, setMessages] = useState(initialiseConversationArray(currentUser.id, currentFriend.id))

    useEffect(() => {
        setMessages(initialiseConversationArray(currentUser.id, currentFriend.id))
    },[currentFriend])
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
            messages,
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