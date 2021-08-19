import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Hero.module.css'

const Hero = () => {
    const { currentFriend } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {currentFriend.name}
        </div>
    )
}

export default Hero