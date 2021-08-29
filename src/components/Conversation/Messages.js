import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Messages.module.css'

const Messages = () => {
    const { currentFriend, scrollRef, currentConversation } = useContext(AppContext)

    return (
        
            <div ref={scrollRef} className={styles.messagelist}>
                {   
                    currentConversation.map((message,index) => {
                    if (message.sender_id === currentFriend.id) {
                        return <div key={index} className={styles.left}>
                            {message.text} 
                            <span className={styles.datetime}>{message.message_time.toLocaleString()}</span>
                            </div> 
                    } else{
                        return <div key={index} className={styles.right}>
                            {message.text}
                            <span className={styles.datetime}>{message.message_time.toLocaleString()}</span>
                            </div>
                    }
                })
            }
            </div>
    )
}

export default Messages