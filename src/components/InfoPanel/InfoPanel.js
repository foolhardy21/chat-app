import React from 'react'
import Self from '../Self/Self';
import FriendsList from '../FriendsList/FriendsList';
import styles from './InfoPanel.module.css'

const Info = () => {

    return (
        <div className={styles.container}>
            <Self />
            <FriendsList />
        </div>
    )
}

export default Info