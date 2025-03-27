import React from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import {NavLink} from 'react-router-dom'

export default function HeaderWidget() {
  return (
    <header>
        <div className="container">
            <div className={styles.head}>
                <Navlink to='/' className={styles.logo}>
                <img src="/logo.png" alt="logo" />
                </Navlink>
                <label htmlFor="search" className={styles.searchLabel}></label>
                <Nav>
                <div className={styles.btns}>
                    <button className={styles.likebtn}>

                    </button>
                    <Navlink to={'/cart'} className={styles.cart}>
                    </Navlink>
                </div>
                <Nav/>


            </div>
        </div>
    </header>
  )
}
