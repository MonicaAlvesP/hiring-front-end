import React, { useEffect, useState } from 'react';
import { Container, ProductCard, Card, Button } from './HomeStyle';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://666a1b752e964a6dfed7a323.mockapi.io/api/produtos/produtos')
      .then(response => {
        const productsWithCount = response.data.map(product => ({
          ...product,
          count: 0
        }));
        setProducts(productsWithCount);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os produtos!', error);
      });
  }, []);

  const handleAdicionar = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const handleRemover = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: product.count > 0 ? product.count - 1 : 0 } : product
      )
    );
  };

  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.avatar} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>R${product.price}</h3>
          <Card>
            <button onClick={() => handleAdicionar(product.id)}>+</button>
            <p>{product.count}</p>
            <button onClick={() => handleRemover(product.id)}>-</button>
          </Card>
          <Button>
            Comprar
          </Button>
        </ProductCard>
      ))}
    </Container>
  );
};

export default Home;
