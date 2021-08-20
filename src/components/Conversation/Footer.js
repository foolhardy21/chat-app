import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Footer = () => {
    const { messagetext, updateMessageText, sendMessage } = useContext(AppContext)

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input value={messagetext} onChange={updateMessageText} type='text' placeholder='type here...' />
                <input type='submit' value='send' />
            </form>
            
        </div>
    )
}

export default Footer