import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
  height: 340px;
  width: 400px;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    label {
      width: 100%;
      margin-bottom: 15px;

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        margin-top: 5px;

        &:focus {
          border-color: #333;
        }
      }
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #555;
      }
    }
  }
`;
