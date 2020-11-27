import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 3px solid var(--primary-color);

  nav {
    @media (max-width: 996px) {
      margin: 20px 0;
    }
    padding: 0 20px;
    display: flex;
    max-width: 1090px;
    margin: 52px auto 22px;
    justify-content: space-between;

    > a {
      @media (max-width: 996px) {
        display: none;
      }

      img {
        width: 351px;
        height: 81px;
      }
    }

    ul:not(.dropdown-menu) {
      display: flex;
      align-self: flex-end;
      margin-bottom: 16px;

      &.visible {
        display: initial;
      }

      @media (max-width: 996px) {
        display: none;
        flex-direction: column;
        text-align: right;
      }

      > li {
        a {
          font-size: 24px;
          color: #000;
        }

        &:first-of-type a {
          font-weight: 700;
          color: var(--primary-color);
        }

        & + li {
          @media (max-width: 996px) {
            margin: 0;
            margin-top: 20px;
          }

          margin-left: 40px;
        }
      }
    }

    .dropdown {
      position: relative;
      font-size: 24px;

      img {
        width: 11px;
        height: 11px;
        margin-left: 4px;
      }

      .dropdown-menu {
        @media (max-width: 996px) {
          position: static;
          min-width: initial;
          padding: initial;
          border-bottom: none;
        }

        @media (min-width: 996px) {
          &:hover {
            .dropdown-menu {
              display: initial;
            }
          }
        }

        &.visible {
          display: initial;
        }

        display: none;
        flex-direction: column;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 25px;
        min-width: 220px;
        padding: 15px 18px;
        border-bottom: 3px solid var(--primary-color);
        background: #fff;

        li {
          @media (max-width: 996px) {
            margin-top: 20px;
          }

          a {
            font-size: 16px;

            &:hover {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`;
