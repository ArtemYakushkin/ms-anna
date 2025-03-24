import React from "react";
import styled from "styled-components";

import gradient from "../assets/about-gradient.png";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
  padding-top: 60px;

  /* background-image: url(${gradient});
  background-size: cover;
  background-position: left bottom -100px;
  background-repeat: no-repeat; */

  @media (max-width: 425px) {
    margin-top: 47px;
  }
`;

const MenuItem = styled.a`
  font-size: 20px;
  font-weight: 600;
`;

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <MenuWrapper isOpen={isOpen}>
      <MenuItem href="#about" onClick={closeMenu}>
        Про мене
      </MenuItem>
      <MenuItem href="#services" onClick={closeMenu}>
        Послуги
      </MenuItem>
      <MenuItem href="#reviews" onClick={closeMenu}>
        Відгуки
      </MenuItem>
      <MenuItem href="#contacts" onClick={closeMenu}>
        Контакти
      </MenuItem>
    </MenuWrapper>
  );
};

export default MobileMenu;
