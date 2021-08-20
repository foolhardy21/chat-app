import React from 'react'
import styles from './Conversation.module.css'
import Header from './Header'
import Messages from './Messages'
import Footer from './Footer'

const ConversationView = () => {
    
    return (
        <div className={styles.container}>
            <Header />
            <Messages />
            <Footer />
        </div>
    )
}

export default ConversationView