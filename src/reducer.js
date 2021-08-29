
const reducer = (state, action) => {
 
    switch ( action.type ) {
        case 'SWITCH_FRIEND': 
                const newfriend = state.friendsList.find( friend => friend.id === action.payload )
                return { ...state, 
                    currentFriend: newfriend, 
                    currentConversation: state.allMessages.filter(convo => ( (convo.sender_id === state.currentUser.id && convo.reciever_id === newfriend.id) || (convo.sender_id === newfriend.id && convo.reciever_id === state.currentUser.id) )
                            ? convo : null)
                }
        case 'SWITCH_USER':
            const newUser = state.allUsers.find(user => user.id === action.payload )
            const newFriend = state.allUsers.find(user => user.id === newUser.friends[0] )
            const friends = state.allUsers.filter( (item) => ( newUser.friends.indexOf( item.id ) !== -1 ) ? item : null)
            return { ...state, 
                currentUser: newUser, 
                currentFriend: newFriend, 
                friendsList: friends,
                currentConversation: (friends.length > 0) ? state.allMessages.filter(convo => ( (convo.sender_id === newUser.id && convo.reciever_id === newFriend.id) || (convo.sender_id === newFriend.id && convo.reciever_id === newUser.id) )
                    ? convo : null) : []
            }
        case 'SEND_MESSAGE':
                const newmessage =  {
                    sender_id: state.currentUser.id,
                    reciever_id: state.currentFriend.id,
                    text: action.payload,
                    message_time: new Date(),
                }
                return { ...state, 
                    allMessages: [...state.allMessages, newmessage], 
                    currentConversation: [...state.currentConversation, newmessage] 
                }
        case 'SEARCH_FRIEND': 
                const allFriends = state.allUsers.filter((item) => state.currentUser.friends.indexOf( item.id ) !== -1 )
                return (action.payload) ? 
                { ...state, 
                    friendsList: allFriends.filter(friend => friend.name.toLowerCase().includes(action.payload.toLowerCase())) 
                }: 
                {...state, 
                    friendsList: allFriends 
                }
        case 'ADD_FRIEND':
                return { ...state, 
                    friendsList: [...state.friendsList, action.payload], 
                    allUsers: state.allUsers.map(user => {
                        if(user.id === state.currentUser.id) {
                            user.friends.push(action.payload.id)
                        } else if(user.id === action.payload.id) {
                            user.friends.push(state.currentUser.id)
                        } return user
                    })
                }
        default: return {}
    }
}

export default reducer