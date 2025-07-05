import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "./Container";

import gradient from "../assets/main-gradient.png";
import main from "../assets/main.png";

const Section = styled.section`
  margin-top: 60px;
  background-image: url(${gradient});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-bottom: 1px solid #c5c4c4;

  @media (max-width: 768px) {
    background-position: right top;
  }

  @media (max-width: 695px) {
    background-position: center top;
    background-size: cover;
    margin-top: 58px;
  }

  @media (max-width: 425px) {
    background-position: left top;
    margin-top: 47px;
  }
`;

const Wrapp = styled.div`
  padding-left: 40px;
  border-left: 1px solid #c5c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 8px 20px;
  }

  @media (max-width: 695px) {
    flex-direction: column-reverse;
  }
`;

const BoxContent = styled(motion.div)`
  max-width: 509px;

  h1 {
    font-weight: 800;
    font-size: 60px;
    line-height: 90px;
  }

  span {
    color: #9000d1;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 37px;
    margin-bottom: 53px;
  }

  @media (max-width: 1210px) {
    h1 {
      font-size: 48px;
      line-height: 70px;
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 1060px) {
    p {
      font-size: 16px;
      line-height: 30px;
    }
  }

  @media (max-width: 970px) {
    max-width: 295px;

    h1 {
      font-size: 36px;
      line-height: 48px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 695px) {
    margin-top: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      line-height: 55px;
      margin-bottom: 16px;
      text-align: center;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
      text-align: center;
    }

    span {
      padding: 2px 4px;
      border-radius: 10px;
      color: #ffffff;
      border: 1px solid #5c5b5b;
    }
  }
`;

const Batton = styled.a`
  width: 100%;
  padding: 20px;
  background-color: #9000d1;
  border-radius: 35px;
  font-weight: 500;
  font-size: 20px;
  line-height: 37px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #7700a3;
    transform: scale(1.2);
  }

  @media (max-width: 970px) {
    padding: 12px 20px;
    font-size: 14px;
    line-height: 37px;
  }

  @media (max-width: 695px) {
    text-align: center;
    font-size: 16px;
  }
`;

const BoxImg = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
  max-width: 650px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1210px) {
    max-width: 550px;
  }

  @media (max-width: 1020px) {
    max-width: 500px;
  }

  @media (max-width: 970px) {
    max-width: 350px;
  }
`;

const StatsContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: 1210px) {
    bottom: 40px;
    gap: 24px;
  }

  @media (max-width: 970px) {
    bottom: 30px;
    right: -6px;
    gap: 10px;
  }
`;

const StatCard = styled.div`
  max-width: 345px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px solid #9000d1;

  span {
    font-weight: 800;
    font-size: 40px;
    line-height: 37px;
    color: #6d28d9;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #2d2d2d;
  }

  @media (max-width: 1210px) {
    max-width: 300px;
    padding: 10px 14px;
    gap: 24px;

    span {
      font-size: 34px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 970px) {
    max-width: 220px;
    padding: 6px 10px;
    gap: 16px;

    span {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      line-height: 18px;
    }
  }

  @media (max-width: 695px) {
    border-radius: 14px;
    max-width: 165px;
    padding: 4px 6px;
    gap: 12px;

    span {
      font-size: 20px;
      line-height: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Wrapp>
          <BoxContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1>
              Learn <span>English</span> Today
            </h1>
            <p>Відчиняй двері новим можливостям за допомогою сили вивчення мови</p>
            <Batton href="#contacts">Почніть навчання сьогодні</Batton>
          </BoxContent>
          <BoxImg
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={main} alt="Hero" />
            <StatsContainer>
              <StatCard>
                <span>300+</span>
                <p>успішних учнів</p>
              </StatCard>
              <StatCard>
                <span>15+</span>
                <p>років викладання</p>
              </StatCard>
            </StatsContainer>
          </BoxImg>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default Hero;
