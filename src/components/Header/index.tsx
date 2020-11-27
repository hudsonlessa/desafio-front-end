import React, { useRef } from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import triangle from '../../assets/triangle.png';
import HamburgerMenu from '../HamburgerMenu';

const Header: React.FC = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const dropDownMenu = useRef<HTMLUListElement>(null);

  const handleDropdownClick = () => {
    dropDownMenu?.current?.classList.toggle('visible');
  };

  return (
    <Container>
      <nav>
        <HamburgerMenu menuRef={menuRef} />

        <a href="http://example.com">
          <img src={logo} alt="Logo Minuto News" />
        </a>

        <ul ref={menuRef}>
          <li>
            <a href="http://example.com">Início</a>
          </li>
          <li
            onClick={handleDropdownClick}
            onKeyDown={handleDropdownClick}
            className="dropdown"
          >
            Brasil
            <img src={triangle} alt="Ícone de triângulo" />
            <ul ref={dropDownMenu} className="dropdown-menu">
              <li>
                <a href="http://example.com">Submenu 01</a>
              </li>
              <li>
                <a href="http://example.com">Submenu 02</a>
              </li>
              <li>
                <a href="http://example.com">Submenu 03</a>
              </li>
              <li>
                <a href="http://example.com">Submenu 04</a>
              </li>
              <li>
                <a href="http://example.com">Submenu 05</a>
              </li>
              <li>
                <a href="http://example.com">Submenu 06</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://example.com">Mundo</a>
          </li>
          <li>
            <a href="http://example.com">Blogs</a>
          </li>
          <li>
            <a href="http://example.com">Assine</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
