import styled from 'styled-components';

export const Main = styled.main`
  #editorias {
    max-width: 1090px;
    padding: 0 20px;
    margin: 0 auto;
    margin: 119px auto 0;

    header {
      display: flex;
      flex-direction: column;

      @media (min-width: 996px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .selects {
        margin-top: 40px;

        @media (min-width: 996px) {
          display: flex;
          margin-top: 0;
        }

        .select-wrapper {
          @media (min-width: 996px) {
            display: flex;
            align-items: center;
          }

          + .select-wrapper {
            margin-top: 20px;

            @media (min-width: 996px) {
              margin-top: 0;
              margin-left: 20px;
            }
          }

          p {
            font-size: 22px;
            margin-right: 21px;
          }

          select {
            margin-top: 10px;

            @media (min-width: 996px) {
              margin-top: 0;
            }
          }
        }
      }
    }

    .editorias {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 55px;
      margin-top: 70px;

      @media (min-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }

      .editoria {
        padding-top: 30px;
        border-top: 3px solid var(--primary-color);

        @media (min-width: 560px) {
          padding-top: 0;
          padding-left: 30px;
          border-top: 0;
          border-left: 3px solid var(--primary-color);
        }

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
          width: 100%;
          height: 240px;
          margin-top: 12px;
          object-fit: cover;

          @media (min-width: 992px) {
            height: 163px;
          }
        }

        h1 {
          font-size: 27.98px;
          margin-top: 22px;

          + p {
            margin-top: 17px;
            color: #666;
          }
        }

        a {
          display: inline-block;
          margin-top: 20px;
          font-weight: 700;
        }
      }
    }
  }

  #editorias-mais-acessadas {
    max-width: 1090px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 118px;

    > div {
      margin-top: 65px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      grid-gap: 70px;
    }

    h1 {
      font-size: 27.98px;
    }

    p {
      @media (min-width: 768px) {
        column-count: 2;
      }
    }

    .mais-acessadas__texto {
      align-self: flex-end;

      h1 + p {
        margin-top: 29px;
      }
    }
  }

  iframe {
    width: 100%;
    height: 448px;
    margin-top: 118px;
    display: block;
  }

  #contato {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    .frame--info {
      .wrapper {
        padding: 0 20px;
        max-width: 516px;
        margin: 136px 35px 136px auto;

        h2 {
          margin-top: 62px;
        }

        .endereco {
          margin-top: 30px;
        }

        .telefones {
          margin-top: 45px;
        }

        a {
          display: inline-block;
        }

        a,
        a + p {
          margin-top: 50px;
        }
      }
    }

    .frame--form {
      background: var(--primary-color);
      color: #fff;

      form {
        max-width: 505px;
        margin: 114px 35px 114px 35px;

        @media (min-width: 768px) {
          margin: 236px 35px 114px 35px;
        }
      }
    }

    h2 {
      font-size: 27.98px;
    }
  }
`;

export const Slider = styled.div``;
