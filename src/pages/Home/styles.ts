import styled from 'styled-components';

export const Main = styled.main`
  hr {
    max-width: 1090px;
    border-top: 2px dashed #666;
    margin: 0 auto;
    margin-top: 105px;
  }

  #hero {
    height: 500px;

    .slider {
      .slide {
      }
    }
  }

  #editorias {
    max-width: 1090px;
    margin: 0 auto;
    margin-top: 119px auto;

    header {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;

        div {
          display: flex;
          align-items: center;
        }

        & + div {
          margin-left: 18px;
        }

        p {
          font-size: 22px;
        }

        select {
          margin-left: 21px;
        }
      }
    }

    .editorias {
      display: grid;
      grid-template-columns: repeat(3, minmax(280px, 1fr));
      grid-gap: 55px;
      margin-top: 70px;

      .editoria {
        border-left: 3px solid var(--primary-color);
        padding-left: 30px;

        .meta {
          display: flex;
          justify-content: space-between;
          font-family: 'Verdana', sans-serif;
          font-size: 14px;

          p:nth-of-type(2) {
            font-weight: 700;
          }
        }

        img {
          margin-top: 12px;
        }

        h1 {
          font-size: 27.98px;
          margin-top: 22px;

          & + p {
            margin-top: 17px;
            color: #666;
          }
        }

        a {
          display: block;
          margin-top: 20px;
          font-weight: 700;
          color: #000;
        }
      }
    }
  }

  #editorias-mais-acessadas {
    max-width: 1090px;
    margin: 0 auto;
    margin-top: 118px;

    > div {
      margin-top: 65px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 70px;
    }

    h1 {
      font-size: 27.98px;
    }

    p {
      column-count: 2;
    }
  }

  iframe {
    width: 100%;
    height: 448px;
    margin-top: 118px;
  }

  #contato {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .endereco {
      margin-top: 30px;
    }

    .telefones {
      margin-top: 45px;

      & + p {
        margin-top: 50px;

        & + p {
          margin-top: 50px;
        }
      }
    }

    .frame {
      &:nth-of-type(1) {
        > .wrapper {
          max-width: 516px;
          margin: 0 35px 0 auto;
        }

        h1 {
          margin-top: 136px;
        }

        h2 {
          margin-top: 62px;
          font-size: 27.98px;

          & + p {
          }
        }
      }

      &:nth-of-type(2) {
        background: var(--primary-color);
        color: #fff;

        > * {
          max-width: 505px;
          margin-left: 35px;
        }

        h1 {
          font-size: 27.98px;
        }
      }
    }

    form {
      margin: 236px 0 114px;
    }
  }
`;

export const Slider = styled.div``;
