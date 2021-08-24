import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Footer = () => {
    const { message, setMessage, sendMessage } = useContext(AppContext)

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='type here...' />
                <input type='submit' value='send' />
            </form>
            
        </div>
    )
}

export default Footer