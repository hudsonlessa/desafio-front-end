import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 3px solid var(--primary-color);

  nav {
    display: flex;
    max-width: 1090px;
    margin: 52px auto 22px;
    justify-content: space-between;

    a {
      img {
        width: 351px;
        height: 81px;
      }
    }

    ul:not(.dropdown-menu) {
      display: flex;
      align-self: flex-end;
      margin-bottom: 16px;

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
          margin-left: 40px;
        }
      }
    }

    .dropdown {
      position: relative;

      &:hover {
        .dropdown-menu {
          display: flex;
        }
      }

      a {
        display: flex;
        align-items: center;

        img {
          width: 11px;
          height: 11px;
          margin-left: 4px;
        }
      }

      .dropdown-menu {
        display: none;
        flex-direction: column;
        min-width: 220px;
        padding: 15px 18px;
        border-bottom: 3px solid var(--primary-color);
        position: absolute;
        top: 25px;
        left: 0;
        background: #fff;

        li {
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
