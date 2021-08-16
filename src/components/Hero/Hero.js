import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Hero.module.css'

const Hero = () => {
    const { currentFriend, allUsers } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {allUsers[currentFriend].name}
        </div>
    )
}

export default Hero