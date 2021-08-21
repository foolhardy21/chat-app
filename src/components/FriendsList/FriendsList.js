import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/newconvo'>
                <button>New</button>
            </Link>

            {
                friends.map( (friend) => {
                    return <Friend key={friend.id} {...friend} /> 
                })
            }
        </div>
    )
}

export default FriendsList