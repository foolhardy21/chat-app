import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Messages.module.css'

const Messages = () => {
    const { currentFriend, scrollRef, currentConversation } = useContext(AppContext)

    return (
        <div className={styles.wrapper}>
            <div ref={scrollRef} className={styles.messagelist}>
                <div className={styles.firstChild}></div>
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