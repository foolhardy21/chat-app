import React, { useContext } from 'react'
import { AppContext } from '../../context'
import Friend from '../Friend/Friend'

const FriendsList = () => {

    const { friends, findFriends }=  useContext(AppContext)

    return (
        
        <div>
            <input 
            placeholder='Search...' 
            type='text'
            onChange={findFriends}
            />

            {
                friends.map( (friend) => {
                    return <Friend key={friend.id} {...friend} /> 
                })
            }
        </div>
    )
}

export default FriendsList