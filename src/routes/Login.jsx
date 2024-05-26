import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='container-bg'>

        <form className='container-login'>
          
          <h1 className='form-titulo'>Login</h1>
          
          <div className='form-group'>
            <label className='form-campo-nome' htmlFor='email'> Email </label>
            <input className='form-campo' type='email' id='email' required/>
          </div>
          
          <div className='form-group'>
            <label className='form-campo-nome' htmlFor='senha'> Senha </label>
            <input className='form-campo' type='password' id='senha' required/>
          </div>

          <button className='form-botao' type='submit'>Login</button>

          <p>Ainda não possui cadastro? <Link className='linkCadastro' to='/'>Clique aqui!</Link></p>

        </form>

    </div>
  )
}
