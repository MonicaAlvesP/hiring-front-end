import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Cart from '../pages/CartContext/Cart';

const Navigation = ({ adicionarAoCarrinho, removerDoCarrinho, carrinho, searchTerm }) => {
  return (
    <Routes>
      <Route path="/" element={<Home adicionarAoCarrinho={adicionarAoCarrinho} searchTerm={searchTerm} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart itens={carrinho} removerDoCarrinho={removerDoCarrinho} />} />
    </Routes>
  );
}

export default Navigation;
