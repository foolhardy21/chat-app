import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Messages = () => {
    const { currentFriend, currentMessages } = useContext(AppContext)

    return (
        <div>
            {
            currentMessages.map((message,index) => {
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