import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Messages = () => {
    const { currentFriend, messages } = useContext(AppContext)

    return (
        <div>
            {
            messages.map((message,index) => {
                if (message.sender_id === currentFriend.id) {
                    return <div key={index}>{`he said ${message.text}`}</div> 
                } else{
                    return <div key={index}>{`you said ${message.text}`}</div>
                }
            })}
        </div>
    )
}

export default Messages