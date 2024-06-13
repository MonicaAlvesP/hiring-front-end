import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation';

export function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const produtoExistente = prevCarrinho.find((item) => item.id === produto.id);

      if (produtoExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id ? { ...item, count: item.count + produto.count } : item
        );
      } else {
        return [...prevCarrinho, produto];
      }
    });
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho((prevCarrinho) => {
      return prevCarrinho
        .map((item) => (item.id === produtoId ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0);
    });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Navigation adicionarAoCarrinho={adicionarAoCarrinho} removerDoCarrinho={removerDoCarrinho} carrinho={carrinho} searchTerm={searchTerm} />
    </>
  );
}

export default App;
