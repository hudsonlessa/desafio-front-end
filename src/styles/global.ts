import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #b22d31;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Georgia", serif;
    min-height: calc(100vh - 72px);
  }

  body, label, input, textarea, button {
    font-size: 17.99px;
  }

  label, input, textarea, button {
    font-family: "Verdana", sans-serif;
  }

  label {
    input, textarea {
      margin-top: 9px;
    }
  }

  input {
    height: 37px;
    padding-left: 16px;
  }

  textarea {
    height: 115px;
    padding-top: 8px;
    padding-left: 16px;
  }

  button {
    padding: 16px 20px;
    background: #000;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  select {
    padding: 10px 8px;
    font-family: 'Verdana', sans-serif;
    font-size: 18.4px;
    text-transform: uppercase;
    background: #000;
    color: #fff;
    border: 0;
  }

  section {
    header {
      h1 {
        font-size: 34px;
        text-transform: uppercase;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;
