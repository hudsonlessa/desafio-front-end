import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import triangle from '../../assets/triangle.png';

const Header: React.FC = () => (
  <Container>
    <nav>
      <a href="http://example.com">
        <img src={logo} alt="Logo Minuto News" />
      </a>

      <ul>
        <li>
          <a href="http://example.com">Início</a>
        </li>
        <li className="dropdown">
          <a href="http://example.com">
            Brasil
            <img src={triangle} alt="Ícone de triângulo" />
          </a>

          <ul className="dropdown-menu">
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

export default Header;
