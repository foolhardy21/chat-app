import React, { useContext } from 'react'
import styles from './Self.module.css'
import { AppContext } from '../../context'

const Self = () => {
    const { currentUser } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {currentUser.name}
        </div>
    )
}

export default Self