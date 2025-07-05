import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { IoMdCheckmark } from "react-icons/io";

import { Container } from "./Container";

import Talk from "../assets/children.png";
import Computer from "../assets/boy.png";
import Books from "../assets/chat (1).png";
import Fire from "../assets/fire.png";

const Section = styled.section`
  border-bottom: 1px solid #c5c4c4;
  /* background: linear-gradient(to bottom, rgba(149, 146, 146, 0.38) 20%, #ae59d3 80%); */
  background-color: #5e2b6d;
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

// #e6e6fa
// #2a0e3c
// #a87ca0

const Item = styled(motion.li)`
  border: 1px solid #e6e6fa;
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

const Img = styled.img`
  width: 68px;
`;

const SubTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #e6e6fa;
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

  div {
    width: 24px;
    height: 24px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
`;

const Prices = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    color: #ffffff;
  }

  img {
    width: 28px;
  }

  span {
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
  }
`;

const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const BtnInfo = styled.a`
  width: fit-content;
  padding: 14px 20px;
  background-color: #74ff5bba;
  border-radius: 35px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;

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
                <Img src={Talk} alt="tlk" />
                <SubTitle>Групові заняття для дітей 7-12 років</SubTitle>
              </BoxTitle>
              <Text>Zoom уроки англійської в мінігрупах</Text>
              <PointList>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Інтерактивні уроки в прямому ефірі
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  40-50хв. - тривалість заняття
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Система оцінювання і заохочування
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Відстежування прогресу дитини та підтримка батьків
                </li>
              </PointList>
              <BoxBtn>
                <BtnInfo href="tg://resolve?domain=AnnaYakushkina" target="_blank" rel="noreferrer">
                  Залишити заявку
                </BtnInfo>
              </BoxBtn>
            </Item>

            <Item
              initial={isMobile ? {} : { y: 100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <Img src={Computer} alt="tlk" />
                <SubTitle>Телеграм канал для дітей 5-7 років</SubTitle>
              </BoxTitle>
              <Text>Онлайн-курс англійської вдома</Text>
              <PointList>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Доступ до 40+ уроків в записі
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Словник і завдання до кожного уроку
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Чат-підтримка з вчителем
                </li>
              </PointList>
              <Prices>
                <div>
                  <img src={Fire} alt="fire" />
                  490* грн./курс
                </div>
                <span>* діє до 31.07</span>
              </Prices>
              <BoxBtn>
                <BtnInfo href="tg://resolve?domain=AnnaYakushkina" target="_blank" rel="noreferrer">
                  Залишити заявку
                </BtnInfo>
              </BoxBtn>
            </Item>

            <Item
              initial={isMobile ? {} : { x: 100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <Img src={Books} alt="tlk" />
                <SubTitle>Базова англійська для дорослих</SubTitle>
              </BoxTitle>
              <Text>Марафон англійської для початківців</Text>
              <PointList>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Рівень А1-А2 (базова лексика, живі теми, без складної граматики)
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Доступні відеоуроки + практичні вправи
                </li>
                <li>
                  <div>
                    <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  </div>
                  Підтримка викладача в чаті
                </li>
              </PointList>
              <BoxBtn>
                <BtnInfo href="tg://resolve?domain=AnnaYakushkina" target="_blank" rel="noreferrer">
                  Залишити заявку
                </BtnInfo>
              </BoxBtn>
            </Item>
          </List>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default Services;
