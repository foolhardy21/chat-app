import React, { useState, useRef, useEffect, useReducer } from 'react'
import users from './data/userdata'
import conversations from './data/messagedata'
import reducer from './reducer'

const AppContext = React.createContext()

const initialiseFriendsArray = (user) => {
    return users.filter( (item) => {
        if ( user.friends.indexOf( item.id ) !== -1 ) {
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
const initialState = {
    allUsers: users,
    allMessages: conversations,
    currentUser: users[0],
    currentFriend: users[1],
    friendsList: initialiseFriendsArray(users[0]),
    currentConversation: initialiseConversationArray(users[0].id, users[1].id)
}

const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [message, setMessage] = useState('')
    const scrollRef = useRef(null)

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    },[state.allMessages, state.currentUser, state.currentFriend])

    const changeCurrentFriend = ( id ) => {
        dispatch({ type: 'SWITCH_FRIEND', payload: id })
    }
    const searchFriend = ( e ) => {
        dispatch({ type: 'SEARCH_FRIEND', payload: e.target.value })
    }
    const sendMessage = (e) => {
        e.preventDefault()
        dispatch({ type: 'SEND_MESSAGE', payload: message })
        setMessage('')
    }
    const changeCurrentUser = (id) => {
        dispatch({ type: 'SWITCH_USER', payload: id })
    }
    const startNewConversation = (user) => {
        dispatch({ type: 'ADD_FRIEND', payload: user })
        changeCurrentFriend(user.id)
    }
    return (
        <AppContext.Provider
        value = {{
            ...state,
            message,
            scrollRef,
            setMessage,
            changeCurrentFriend,
            searchFriend,
            sendMessage,
            changeCurrentUser,
            startNewConversation,
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