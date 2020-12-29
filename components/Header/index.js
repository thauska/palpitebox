import React from 'react'
import styles from './styles.module.css'

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-gray-200 p-4">
                PalpiteBox
            </div>
            <div className={styles.test}>testando CSS Modules</div>
        </div>
    )
}

export default Header