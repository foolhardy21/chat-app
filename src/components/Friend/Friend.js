import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Friend.module.css'

const Friend = ({id, name}) => {
    const { changeFriend } = useContext(AppContext)

    return (
        <div className={styles.container} onClick={() => changeFriend(id)}>
            {name}
        </div>
    )
}

export default Friend