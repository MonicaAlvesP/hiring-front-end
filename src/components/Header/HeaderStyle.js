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

export const SearchStyle = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  gap: 10px;
  padding-right: 10px;

  input {
    padding: 12px;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 1.2rem;
  }

  button {
    background: #71afce;
    color: #f0f0f0;
    border: none;
    padding: 12px;
    cursor: pointer;
    font-size: 1.2rem;
  }
`