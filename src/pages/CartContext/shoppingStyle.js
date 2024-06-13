import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px 240px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  h3 {
    margin-top: 20px;
    border: solid 2px #ddd;
    padding: 10px;
    border-radius: 15px;
  }

  span {
    font-weight: bold;
    margin-left: 5px;
    color: #71afce;
  }

  button {
    background-color: #71afce;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 20px;

    &:hover {
      background-color: #4a90e2;
    }
  }
`