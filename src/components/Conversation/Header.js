import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Header = () => {
    const { currentFriend } = useContext(AppContext)

    return (
        <div>
            {currentFriend.name}
        </div>
    )
}

export default Header