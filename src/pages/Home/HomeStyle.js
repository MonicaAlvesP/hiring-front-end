import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  align-items: center;
`

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 25px;
  height: 65vh;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;

  img {
    height: 20vh;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`

export const Button = styled.button`
  background-color: #71afce;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #4a90e2;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;