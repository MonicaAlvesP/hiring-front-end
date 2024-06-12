import React from 'react'
import { SignInContainer } from './LoginStyle'

const Login = () => {
  return (
    <SignInContainer>
      <h1>Identificação</h1>

      <h2>Entre ou cadastre - se</h2>

      <form action="">
        <p>Para começar, digite seu CPF ou CNPJ no campo abaixo.</p>
        <label>
          <input type="text" placeholder="Digite seu CPF ou CNPJ" />
        </label>
        <button>Continuar</button>
      </form>
    </SignInContainer>
  )
}

export default Login