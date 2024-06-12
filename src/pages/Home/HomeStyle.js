import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;

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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;


    li {
      margin: 0 5px;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;

      &.active {
        background-color: #71afce;
        color: #fff;
      }

      a {
        text-decoration: none;
        color: #333;
      }

      a:active{
        color: #fff;
      }
    }
  }
`;

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
    background-color: #a61d1a;
  }
`;