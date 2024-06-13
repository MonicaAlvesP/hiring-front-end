import React from 'react';
import { Container } from './shoppingStyle.js'

function Cart({ itens, removerDoCarrinho }) {
  const total = itens.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <Container>
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <div>
          <ul>
            {itens.map((item, index) => (
              <li key={index}>
                {item.name} - {item.count} x R${item.price} = R${(item.price * item.count).toFixed(2)}
                <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <h3>Total: <span>R${total.toFixed(2)}</span></h3>
        </div>
      )}
    </Container>
  );
}

export default Cart;
