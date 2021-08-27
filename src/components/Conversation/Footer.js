import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Footer.module.css'

const Footer = () => {
    const { message, setMessage, sendMessage } = useContext(AppContext)

    return (
        <div className={styles.container}>
            <form onSubmit={sendMessage}>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='type here...' />
                <input type='submit' value='send' />
            </form>
            
        </div>
    )
}

export default Footer