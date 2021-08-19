import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Hero.module.css'

const ConversationView = () => {
    const { currentFriend, messages } = useContext(AppContext)
    
    return (
        <div className={styles.container}>
            {currentFriend.name}
            
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

export default ConversationView