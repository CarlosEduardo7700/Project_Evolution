import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={styles.containerBackground}>

        <form className={styles.containerForm}>
          
          <h1 className={styles.formTitle}>Login</h1>
          
          <div className={styles.formGroup}>
            <label className={styles.formFieldLabel} htmlFor='email'> Email </label>
            <input className={styles.formField} type='email' id='email' required/>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.formFieldLabel} htmlFor='senha'> Senha </label>
            <input className={styles.formField} type='password' id='senha' required/>
          </div>

          <button className={styles.formButton} type='submit'>Login</button>

          <p>Ainda não possui cadastro? <Link className={styles.linkSignup} to='/cadastre-se'>Clique aqui!</Link></p>

        </form>

    </div>
  )
}
