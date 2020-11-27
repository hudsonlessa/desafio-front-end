import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-self: end;

  div {
    display: flex;
    background: #000;
    color: #fff;
    padding: 16px 16px;
    font-family: 'Verdana', sans-serif;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    font-size: 18.26px;
    font-weight: 700;
  }

  li {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    position: relative;

    span {
      position: absolute;
      top: -40px;
      margin: 0 auto;
      color: initial;
      font-family: 'Georgia', serif;
      font-size: 28.57px;
      font-weight: 700;
    }
  }

  li:first-of-type {
    div {
      background: var(--primary-color);
    }
  }
`;
