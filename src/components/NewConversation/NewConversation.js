import React, { useContext } from 'react'
import { AppContext } from '../../context'

const NewConversation = () => {
    const { messagetext, updateMessageText, allUsers, setNewFriend, addNewConvo } = useContext(AppContext)

    return (
        <div>
            {
                allUsers.map((user) => {
                    return <li key={user.id} onClick={() => setNewFriend(user.id)}>{user.name}</li>
                })
            }
            <form onSubmit={addNewConvo}>
                <input value={messagetext} onChange={updateMessageText} type='text' placeholder='type message here...' />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default NewConversation