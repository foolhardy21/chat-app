import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Header.module.css'

const Header = () => {
    const { currentFriend } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {
                currentFriend ? `${currentFriend.name}` : ``
            }
        </div>
    )        
}

export default Header