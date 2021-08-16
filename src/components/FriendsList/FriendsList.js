import React, { useContext } from 'react'
import { AppContext } from '../../context'
import Friend from '../Friend/Friend'

const FriendsList = () => {

    const { allUsers, currentUser }=  useContext(AppContext)

    return (
        <div>
            {
                allUsers[currentUser].friends.map((friend_id) => {
                    return <Friend key={friend_id} {...allUsers[friend_id]} /> 
                })
            }
        </div>
    )
}

export default FriendsList