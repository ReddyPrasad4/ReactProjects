import React from 'react'

import styles from './project2.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.left}>Logo</article>
        <article className={styles.right}>
            <NavLink className={styles.links} to='/'>Products</NavLink>
            <NavLink className={styles.links} to='/cart'>Cart    </NavLink>
            <NavLink className={styles.links} to='/order'>Order   </NavLink>
            {/* <NavLink className={styles.links} to='/checkout'>CheckOut</NavLink> */}
            <NavLink className={styles.links} >About</NavLink>

        </article>
    </div>
  )
}

export default NavBar