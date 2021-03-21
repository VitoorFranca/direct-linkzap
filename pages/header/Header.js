import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export  default () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <Link href="/"><img src='/logo.png'/></Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <Link href='/' ><li>Home</li></Link>
                    <Link href='/sobre/Sobre' ><li>Sobre</li></Link>
                </ul>
            </nav>
        </header>
    )
}