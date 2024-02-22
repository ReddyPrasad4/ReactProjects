import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './crud.module.css'

const NavBarCrud = () => {
  return (
    <div>
      <article className={styles.nav}>
        <NavLink className={styles.links} to='/'>Create</NavLink>
        <NavLink className={styles.links} to='/data'>Data  </NavLink>
        <NavLink className={styles.links} to='/view'>View  </NavLink>
        <NavLink className={styles.links} to='/update'>Update</NavLink>
      </article>
    </div>
  )
}

export default NavBarCrud