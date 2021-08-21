import React, { useState, useEffect } from 'react'
import users from './data/userdata'
import { conversations } from './data/messagedata'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    
    const initialiseFriendsArray = () => {
        return allUsers.filter( (item) => {
            if ( currentUser.friends.indexOf( item.id ) !== -1 ) {
                return item
            } else {
                return null
            }
        })
    }
    const initialiseConversationArray = (user1, user2) => {
        let newconvo = allMessages.filter(convo => {
            if( (convo.sender_id === user1 && convo.reciever_id === user2) 
                    || (convo.sender_id === user2 && convo.reciever_id === user1) ) {
                return convo
            } else {
                return null
            }
        })
        return newconvo 
    }
    const [allUsers, setAllUsers] = useState(users)
    const [allMessages, setAllMessages] = useState(conversations)
    const [currentUser, setCurrentUser] = useState( users[0] )
    const [friends, setAllFriends] = useState( initialiseFriendsArray() )
    const [currentFriend, setCurrentFriend] = useState( users[1] )
    const [messages, setMessages] = useState(initialiseConversationArray(currentUser.id, currentFriend.id))
    const [messagetext, setMessageText] = useState('')

    useEffect(() => {
        setMessages(initialiseConversationArray(currentUser.id, currentFriend.id))
    },[currentFriend, currentUser])
    useEffect(() => {
        setAllFriends(initialiseFriendsArray())
    },[allUsers])
    
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
    const sendMessage = (e) => {
        e.preventDefault()
        const newmessage =  {
            sender_id: currentUser.id,
            reciever_id: currentFriend.id,
            text: messagetext,
            time: new Date(),
        }
        setMessages([...messages,newmessage])
        setAllMessages([...allMessages,newmessage])
        setMessageText('')
        
    }
    const updateMessageText = (e) => {
        setMessageText(e.target.value)
    }
    const setNewFriend = (id) => {
        const newfriend = allUsers.filter( friend => friend.id === id )
        setCurrentFriend( ...newfriend )
    }
    const addNewConvo = (e) => {
        sendMessage(e)
                
        const newallUsers = allUsers.map(user => {
            if(user.id === currentUser.id) {
                user.friends.push(currentFriend.id)
            }
            return user
        })
        setAllUsers([...newallUsers])
    }
    return (
        <AppContext.Provider
        value = {{
            allUsers,
            currentUser,
            friends,
            currentFriend,
            messages,
            messagetext,
            changeFriend,
            findFriends,
            sendMessage,
            setMessageText,
            updateMessageText,
            setNewFriend,
            addNewConvo,
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