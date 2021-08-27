import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Messages.module.css'

const Messages = () => {
    const { currentFriend, currentConversation } = useContext(AppContext)

    return (
        <div className={styles.wrapper}>
            <div className={styles.messagelist}>
                {
                    currentConversation.map((message,index) => {
                    if (message.sender_id === currentFriend.id) {
                        return <div key={index} className={styles.left}>{message.text}</div> 
                    } else{
                        return <div key={index} className={styles.right}>{message.text}</div>
                    }
                })
            }
            </div>

        </div>
    )
}

export default Messages