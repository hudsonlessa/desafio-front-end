import styled from 'styled-components';

export const Container = styled.div`
  div {
    width: 32px;
    height: 4px;
    background: #000;

    + div {
      margin-top: 5px;
    }
  }

  @media (min-width: 996px) {
    display: none;
  }
`;
