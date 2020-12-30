import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className="container mx-auto">
                    <Link href="/">
                        <a>
                            <img className="mx-auto" src="/images/logo_palpitebox.png" alt="PalpiteBox" />
                        </a>
                    </Link>
                </div>
                <div className="bg-gray-300 p-4 shadow-md text-center">
                    <Link href="/sobre">
                        <a>Sobre</a>
                    </Link>
                    <Link href="/contato">
                        <a>Contato</a>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header