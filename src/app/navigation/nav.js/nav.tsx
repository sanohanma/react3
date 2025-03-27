import React from 'react'
import styles from './style.module.scss'
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <ul className="styles nsv">
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/'
            >
                home
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/about'
            >
                about
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/ccontactUs'
            >
                contactUs
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/blog'
            >
                blog
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='cart'
            >
                cart
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/catalog'
            >
                catalogpage
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive})=>isActive ? '${styles.active} ${styles.active}' : styles.link
            }
            to='/*'
            >
                notfoundpage
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
