import { createGlobalStyle } from 'styled-components';
import triangle from '../assets/triangle--white.png';

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

  input, textarea {
    border-radius: 0;
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
    color: inherit;
  }

  select {
    -webkit-appearance: none;
    padding: 10px 8px;
    padding-right: 24px;
    border-radius: 0;
    font-family: 'Verdana', sans-serif;
    font-size: 18.4px;
    text-transform: uppercase;
    color: #fff;
    background: url(${triangle}) no-repeat center right 8px, #000;
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

  hr {
    width: 1090px;
    max-width: calc(100% - 40px);
    border-top: 2px dashed #666;
    margin: 105px auto 0;
  }
`;
