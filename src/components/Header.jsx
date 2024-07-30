import React from 'react'
import styles from './Header.module.css'
import { IoSearch, IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className={styles.containerHeader}>
        <h1>Evolution</h1>
        
        <div className={styles.containerSearch}>
            <input className={styles.searchBar} type="text" placeholder='Pesquise aqui...'/>
            <button className={styles.searchButton}><IoSearch size={17}/></button>
        </div>

        <div className={styles.containerPerfil}>
            <p><FaUserCircle size={28}/></p>
            <p><IoLogOutOutline size={28}/></p>
        </div>
    </div>
  )
}
