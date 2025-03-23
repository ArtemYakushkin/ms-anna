import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "./Container";
import MobileMenu from "./MobileMenu";

import Logo from "../assets/Logo.png";

const HeaderBox = styled.header`
  border-bottom: 1px solid #c5c4c4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: rgba(201, 201, 201, 0.4);
  box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
    inset 0px 0px 68px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
`;

const Wrapp = styled.div`
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #c5c4c4;

  @media (max-width: 768px) {
    padding: 8px 20px;
  }

  @media (max-width: 425px) {
    padding: 8px 20px;
  }
`;

const LogoImg = styled.img`
  width: 140px;
  height: auto;

  @media (max-width: 425px) {
    width: 100px;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 45px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Item = styled.li`
  position: relative;
  font-weight: 600;
  font-size: 16px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #9000d1;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const BurgerButton = styled.button`
  display: none;

  @media (max-width: 850px) {
    position: relative;
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
  }
`;

const MenuLines = styled.div`
  width: 30px;
  height: 2px;
  background-color: #5c5b5b;
  position: relative;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: #5c5b5b;
    border-radius: 2px;
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    top: -6px;
    left: 0;
  }

  &::after {
    bottom: -6px;
    right: 0;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(-45deg);
    
    &::before {
      transform: rotate(90deg);
      top: -7px;
      left: 7px;
    }

    &::after {
      transform: rotate(90deg);
      top: 7px;
      left: 7px;
    }
  `}
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderBox>
      <Container>
        <Wrapp>
          <LogoImg src={Logo} alt="logo" />
          <List>
            <Item>
              <a href="#about">Про мене</a>
            </Item>
            <Item>
              <a href="#services">Послуги</a>
            </Item>
            <Item>
              <a href="#reviews">Відгуки</a>
            </Item>
            <Item>
              <a href="#contacts">Контакти</a>
            </Item>
          </List>

          <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
            <MenuLines isOpen={menuOpen} />
          </BurgerButton>
        </Wrapp>
      </Container>

      <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </HeaderBox>
  );
};

export default Header;
