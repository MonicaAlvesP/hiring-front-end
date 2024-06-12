import styled from "styled-components";


export const HeaderStyle = styled.header`
  background: #71afce;
  padding: 2vh;
  margin-bottom: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    color: #f0f0f0;
  }

  input {
    height: 5vh;
    width: 30vw;
    border: none;
  }


  button {
    padding: 10px 20px;
    background: red;
    border: none;
    color: #f0f0f0;
    border-radius: 5px;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: #f0f0f0;
    line-height: 2;
    position: relative;
  }

  a:before {
  content: '';
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -.25rem;
  left: 50%;
  transition: width .4s, left .4s;
  }

  a:hover:before {
  width: 100%;
  left: 0;
  }

  .carrinho {
    font-size: 1.2rem;
    color: #f0f0f0;
  }
`