import styled from 'styled-components';

export const Main = styled.main`
  #hero {
    height: 500px;

    .slider {
      position: relative;
      height: 100%;

      .arrow {
        width: 52.27px;
        height: 72px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        &--left {
          left: 20px;
        }

        &--right {
          right: 20px;
          transform: translateY(-50%) rotate(180deg);
        }
      }

      .slides {
        display: flex;
        height: 100%;
        overflow: hidden;

        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;

        .slide {
          scroll-snap-align: start;
        }
      }

      .slide,
      img {
        width: 100vw;
        height: 100%;
      }

      .slider__selectors {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 33px;
      }

      .selector {
        width: 20.77px;
        height: 21px;
        background: #fff;
        border: 3px solid #000;
        cursor: pointer;

        &--active {
          border-color: var(--primary-color);
        }

        + .selector {
          margin-left: 15px;
        }
      }
    }
  }

  #editorias {
    max-width: 1090px;
    margin: 0 auto;
    margin: 119px auto 0;

    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      div {
        display: flex;
        flex-wrap: wrap;

        + div {
          margin-left: 18px;
        }

        div {
          display: flex;
          align-items: center;
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
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
          width: 100%;
          height: 163px;
          margin-top: 12px;
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
    margin: 0 auto;
    margin-top: 118px;

    > div {
      margin-top: 65px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 70px;
    }

    h1 {
      font-size: 27.98px;
    }

    p {
      column-count: 2;
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
        max-width: 516px;
        margin: 0 35px 0 auto;

        h1 {
          margin-top: 136px;
        }

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
        margin: 236px auto 114px 35px;
        max-width: 505px;
      }
    }

    h2 {
      font-size: 27.98px;
    }
  }
`;

export const Slider = styled.div``;
