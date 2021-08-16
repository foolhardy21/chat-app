import React, { useContext } from 'react'
import styles from './Self.module.css'
import { AppContext } from '../../context'

const Self = () => {
    const { currentUser, allUsers } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {allUsers[currentUser].name}
        </div>
    )
}

export default Self