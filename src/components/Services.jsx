import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
  margin-top: auto;

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

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="services">
      <Container>
        <Wrapp ref={ref}>
          <Titile>Мої послуги</Titile>
          <List>
            <Item
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdMenuBook size={60} />
                <SubTitle>Групові заняття</SubTitle>
              </BoxTitle>
              <Text>Інтерактивні уроки в мінігрупах, 4-6 учнів</Text>
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
            </Item>

            <Item
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdChat size={60} />
                <SubTitle>Парні заняття</SubTitle>
              </BoxTitle>
              <Text>Комунікативні сесії в парі</Text>
              <PointList>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Реальні теми
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Фокус на вимову
                </li>
                <li>
                  <IoMdCheckmark size={24} style={{ color: "#00FF0B" }} />
                  Культурний обмін
                </li>
              </PointList>
            </Item>

            <Item
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <BoxTitle>
                <MdOutlinePerson3 size={60} />
                <SubTitle>Індивідуальні заняття</SubTitle>
              </BoxTitle>
              <Text>Спеціалізована підготовка за запитом</Text>
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
            </Item>
          </List>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default Services;
