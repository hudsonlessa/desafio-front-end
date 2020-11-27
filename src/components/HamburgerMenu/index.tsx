import React from 'react';
import { Container } from './styles';

interface HamburgerMenuProps {
  menuRef: React.RefObject<HTMLUListElement>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuRef }) => {
  const handleClick = () => {
    menuRef?.current?.classList.toggle('visible');
  };

  return (
    <Container onClick={handleClick}>
      <div />
      <div />
      <div />
    </Container>
  );
};

export default HamburgerMenu;
