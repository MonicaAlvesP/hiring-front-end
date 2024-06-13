import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyle.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <ContainerLogin>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Digite seu email"
            required
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Digite sua senha"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </ContainerLogin>
  );
}

export default Login;
