import React from "react";
import styled from "styled-components";

import { MdOutlineMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";

import { Container } from "./Container";

import footerBg from "../assets/footer-bg.jpg";

const FooterBox = styled.footer``;

const TopSection = styled.div`
  border-bottom: 1px solid #c5c4c4;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.8) 70%, #323232 100%);
    z-index: 1;
  }

  background-image: url(${footerBg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

const TopWrapp = styled.div`
  position: relative;
  padding: 50px 40px;
  border-left: 1px solid #c5c4c4;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 29px;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 580px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const ContactsItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #00898f;

    @media (max-width: 580px) {
      flex-direction: column;
      font-size: 18px;
    }
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const SocialItem = styled.li`
  a {
    color: #00898f;
  }
`;

const BottomSection = styled.div`
  background-color: #202020;
`;

const BottomWrapp = styled.div`
  border-left: 1px solid #c5c4c4;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 29px;
    color: #ffffff;
    text-align: end;
    margin-right: 40px;
    padding: 5px 0;
  }

  @media (max-width: 580px) {
    p {
      font-size: 8px;
      line-height: 18px;
      margin-right: 0px;
      padding: 2px 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBox id="contacts">
      <TopSection>
        <Container>
          <TopWrapp>
            <Title>Зв’язок зі мною</Title>

            <ContactsList>
              <ContactsItem>
                <a href="tel:+380977046004" target="_blank" rel="noreferrer">
                  <MdOutlineLocalPhone size={60} />
                  +38-097-704-60-04
                </a>
              </ContactsItem>
              <ContactsItem>
                <a href="mailto:mrs.anna.teacher@gmail.com" target="_blank" rel="noreferrer">
                  <MdOutlineMailOutline size={60} />
                  mrs.anna.teacher@gmail.com
                </a>
              </ContactsItem>
            </ContactsList>

            <SocialList>
              <SocialItem>
                <a
                  href="https://www.instagram.com/start_english_today?igsh=MTdxdGJsZnQ1YWNxbQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare size={60} />
                </a>
              </SocialItem>
              <SocialItem>
                <a href="tg://resolve?domain=AnnaYakushkina" target="_blank" rel="noreferrer">
                  <FaTelegram size={60} />
                </a>
              </SocialItem>
              <SocialItem>
                <a
                  href="https://www.linkedin.com/in/anna-yakushkina-3011202a9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={60} />
                </a>
              </SocialItem>
            </SocialList>
          </TopWrapp>
        </Container>
      </TopSection>

      <BottomSection>
        <Container>
          <BottomWrapp>
            <p>© 2025 Всі права захищені. Розроблено Артем Якушкін.</p>
          </BottomWrapp>
        </Container>
      </BottomSection>
    </FooterBox>
  );
};

export default Footer;
