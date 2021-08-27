import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'
import Friend from '../Friend/Friend'
import styles from './FriendsList.module.css'

const FriendsList = () => {

    const { friendsList, searchFriend }=  useContext(AppContext)
    return (
        
        <div>
            <div className={styles.container}>
                <input 
                placeholder='Search for friends...'
                type='text'
                onChange={searchFriend}
                />
                <Link to='/newconvo'>
                    <button>New Chat</button>
                </Link>
            </div>

            {
                friendsList.map( (friend) => {
                    return <Friend key={friend.id} {...friend} /> 
                })
            }
        </div>
    )
}

export default FriendsList