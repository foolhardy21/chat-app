import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Friend.module.css'

const Friend = ({id, name}) => {
    const { changeCurrentFriend } = useContext(AppContext)

    return (
        <div className={styles.container} onClick={() => changeCurrentFriend(id)}>
            {name}
        </div>
    )
}

export default Friend