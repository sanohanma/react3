import React from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import {NavLink} from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to='/'
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to='/about'
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to='/contactUs'
          >
            contact us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to='/blog'
          >
            blog
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
