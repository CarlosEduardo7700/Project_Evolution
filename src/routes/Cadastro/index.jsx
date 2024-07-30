import React from 'react'
import styles from './Cadastro.module.css'
import { Link } from 'react-router-dom'

export default function Cadastro() {

  return (
    <div className={styles.containerBackground}>

        <form className={styles.containerForm}>

            <h1 className={styles.formTitle}>Cadastre-se</h1>

            <div className={styles.formGroupNome}>
                <label className={styles.formFieldLabel} htmlFor="nome">Nome Completo</label>
                <input className={styles.formField} type="text" name='nome' id='nome' required/>
            </div>
            
            <div className={styles.formGroupGenero}>
                <label className={styles.formFieldLabel} htmlFor="genero">Gênero</label>
                <div className={styles.optionsGenero}>
                    <div className={styles.optionGenero}>
                        <label htmlFor="masculino">Masculino</label>
                        <input type='radio' name='genero' id='masculino' required/>
                    </div>
                    <div className={styles.optionGenero}>
                        <label htmlFor="feminino">Feminino</label>
                        <input type='radio' name='genero' id='feminino' required/>
                    </div>
                </div>
                
            </div>

            <div className={styles.formGroupDataNasc}>
                <label className={styles.formFieldLabel} htmlFor="data-nascimento">Data de Nascimento</label>
                <input className={styles.formField} type='date' id='data-nascimento' required/>
            </div>
            
            <div className={styles.formGroupTelefone}>
                <label className={styles.formFieldLabel} htmlFor="telefone">Telefone</label>
                <input className={styles.formField} type='text' id='telefone' required/>
            </div>

            <div className={styles.formGroupEmail}>
                <label className={styles.formFieldLabel} htmlFor="email">Email</label>
                <input className={styles.formField} type='email' id='email' required/>
            </div>

            <div className={styles.formGroupSenha}>
                <label className={styles.formFieldLabel} htmlFor="senha">Senha</label>
                <input className={styles.formField} type='password' id='senha' required/>
            </div>

            <div className={styles.formGroupSenhaConf}>
                <label className={styles.formFieldLabel} htmlFor="confirme-senha">Confirme sua Senha</label>
                <input className={styles.formField} type='password' id='confirme-senha' required/>
            </div>

            <button className={styles.formButton} type='submit'>Cadastrar</button>

            <p>Já possui cadastro? <Link className={styles.linkSignup} to='/'>Clique aqui!</Link></p>


        </form>
            
    </div>
  )
}
