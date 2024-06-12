import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <h1>
          <img src="https://cdn.pixabay.com/photo/2018/10/15/15/07/purchase-3749193_1280.png" height={'30px'} />
          Bazar <span>Diverso</span>
        </h1>
        <input type="search" placeholder='Buscar produtos...' />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/shopping">Compras</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header