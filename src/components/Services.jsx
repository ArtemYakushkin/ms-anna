import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { MdOutlinePerson3, MdMenuBook, MdChat } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import { Container } from "./Container";

const Section = styled.section`
  border-bottom: 1px solid #c5c4c4;
  background: linear-gradient(to bottom, rgba(149, 146, 146, 0.38) 20%, #ae59d3 80%);
  scroll-margin-top: 60px;

  @media (max-width: 425px) {
    scroll-margin-top: 47px;
  }
`;

const Wrapp = styled.div`
  padding: 50px 40px;
  border-left: 1px solid #c5c4c4;

  @media (max-width: 425px) {
    padding: 30px 20px;
  }
`;

const Titile = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 29px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Item = styled(motion.li)`
  border: 1px solid #c5c4c4;
  border-top-right-radius: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 15px 20px 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 840px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 320px;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 16px;
`;

const SubTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 29px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 22px;
  text-align: center;
`;

const PointList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
`;

const Prices = styled.p`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  text-align: center;

  span {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0px;
      width: 100%;
      height: 2px;
      background-color: #ff0000;
      transform: rotate(-7deg);
    }
  }
`;

const BtnInfo = styled.button`
  display: inline;
  padding: 20px;
  background-color: #ff5b5b9c;
  border-radius: 35px;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  /* margin-top: 20px; */
  margin-top: auto;

  cursor: none;

  @media (max-width: 970px) {
    padding: 12px 20px;
    font-size: 16px;
    line-height: 37px;
  }

  @media (max-width: 695px) {
    text-align: center;
    font-size: 16px;
  }
`;

const BtnInfoOk = styled.a`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #74ff5bba;
  border-radius: 35px;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  /* margin-top: 20px; */
  margin-top: auto;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #74ff5b;
  }

  @media (max-width: 970px) {
    padding: 12px 20px;
    font-size: 16px;
    line-height: 37px;
  }

  @media (max-width: 695px) {
    text-align: center;
    font-size: 16px;
  }
`;

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isMobile = useMediaQuery({ maxWidth: 1100 });

  return (
    <Section id="services">
      <Container>
        <Wrapp ref={ref}>
          <Titile>Мої послуги</Titile>
          <List>
            <Item
              initial={isMobile ? {} : { x: -100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdMenuBook size={60} />
                <SubTitle>Групові заняття для дітей 7-12 років</SubTitle>
              </BoxTitle>
              <Text>
                Інтерактивні уроки в мінігрупах,
                <br /> 4-6 учнів
              </Text>
              <PointList>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Індивідуальний навчальний план
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Гнучкий розклад
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Відстеження прогресу
                </li>
              </PointList>
              <BtnInfo>Набір закрито</BtnInfo>
            </Item>

            <Item
              initial={isMobile ? {} : { y: 100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdChat size={60} />
                <SubTitle>Телеграм канал для дітей 5-7 років</SubTitle>
              </BoxTitle>
              <Text>
                Інтерактивні відеоуроки
                <br /> з вчителем
              </Text>
              <PointList>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Реальні теми
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Домашні завдання і чат
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Легкий старт без стресу
                </li>
              </PointList>
              <Prices>
                <span>1500грн.</span> 450грн./місяць
              </Prices>
              <BtnInfoOk href="tg://resolve?domain=AnnaYakushkina" target="_blank" rel="noreferrer">
                Приєднатись
              </BtnInfoOk>
            </Item>

            <Item
              initial={isMobile ? {} : { x: 100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdOutlinePerson3 size={60} />
                <SubTitle>Індивідуальні заняття для рівнів А1-В1</SubTitle>
              </BoxTitle>
              <Text>
                Спеціалізована підготовка
                <br /> за запитом
              </Text>
              <PointList>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Визначення цілі навчання
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Індивідуальний план
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Покращення оцінки
                </li>
              </PointList>
              <BtnInfo>Набір закрито</BtnInfo>
            </Item>
          </List>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default Services;
