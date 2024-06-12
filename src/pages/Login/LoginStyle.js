import styled from "styled-components";

export const SignInContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
  gap: 2rem;

  input {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    font-size: 1rem;
    padding: 1rem;
    border-color: #71afce;
  }

  button {
    background-color: #71afce;
    border: none;
    border-radius: 5px;
    color: #f0f0f0;
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem;
  }
`