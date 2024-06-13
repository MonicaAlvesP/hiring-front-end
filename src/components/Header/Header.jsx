import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './HeaderStyle';
import { LuShoppingCart } from "react-icons/lu";
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  return (
    <HeaderStyle>
      <nav>
        <h1>
          <img src="https://cdn.pixabay.com/photo/2018/10/15/15/07/purchase-3749193_1280.png" height={'30px'} alt="Logo" />
          Bazar <span>Diverso</span>
        </h1>
        <SearchBar onSearch={onSearch} />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/cart"><LuShoppingCart /></Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
