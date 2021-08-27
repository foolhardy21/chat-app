import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Self.module.css'
import { AppContext } from '../../context'

const Self = () => {
    const { currentUser } = useContext(AppContext)

    return (
        <div className={styles.container}>
            {currentUser.name}
            <Link to='/users' className={styles.link}>
              <div>New Login</div>
            </Link>
        </div>
    )
}

export default Self