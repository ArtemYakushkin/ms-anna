import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Container } from "./Container";

import gradient from "../assets/about-gradient.png";
import aboutImg from "../assets/about-img.jpg";

const Section = styled.section`
  border-bottom: 1px solid #c5c4c4;
  scroll-margin-top: 60px;

  @media (max-width: 425px) {
    scroll-margin-top: 47px;
  }
`;

const Wrapp = styled.div`
  padding: 50px 40px 50px 0;
  border-left: 1px solid #c5c4c4;
  background-image: url(${gradient});
  background-size: 1000px 1000px;
  background-position: left -200px center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-size: 1000px 1000px;
    background-position: top center;
    padding: 20px 20px 20px 0;
  }

  @media (max-width: 425px) {
    padding: 20px 10px 20px 0;
  }
`;

const ContentWrapp = styled.div`
  border-top: 1px solid #c5c4c4;
  border-right: 1px solid #c5c4c4;
  border-bottom: 1px solid #c5c4c4;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  padding: 35px 40px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const BoxImg = styled(motion.div)`
  width: 337px;
  height: 505px;
  border-radius: 30px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    width: 350px;
    height: 350px;
    border-radius: 50%;

    img {
      object-position: top;
    }
  }

  @media (max-width: 550px) {
    width: 250px;
    height: 250px;
  }
`;

const BoxText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 743px;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #323232;
  }

  @media (max-width: 1100px) {
    width: 100%;

    p {
      text-align: center;
    }
  }

  @media (max-width: 550px) {
    p {
      font-size: 16px;
      line-height: 28px;
      text-align: start;
    }
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const isMobile = useMediaQuery({ maxWidth: 1100 });

  return (
    <Section id="about">
      <Container>
        <Wrapp>
          <ContentWrapp ref={ref}>
            <BoxImg
              initial={isMobile ? {} : { x: -100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              <img src={aboutImg} alt="about img" />
            </BoxImg>
            <BoxText
              initial={isMobile ? {} : { x: 100, opacity: 0 }}
              animate={isMobile ? {} : isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              <p>
                Вітаю! Мене звати Анна Якушкіна, дипломований вчитель з кваліфікацією в галузі
                педагогіки та методики викладання англійської мови.
              </p>
              <p>
                Маю понад 15 років досвіду викладання, протягом яких навчила близько 300 учнів.
                Багато з них успішно адаптувалися в англомовних країнах, таких як США, Франція,
                Польща, Німеччина, Канада, Греція, вступивши до місцевих шкіл без необхідності
                складання додаткових мовних іспитів.
              </p>
              <p>
                У своїй роботі я дотримуюся комунікативного методу навчання, приділяючи особливу
                увагу індивідуальному підходу до кожного учня.
              </p>
              <p>
                Для розширення доступу до навчання я розробила онлайн курс англійської мови для
                дітей шкільного віку і базовий курс для дошкільнят у форматі телеграм каналу.
              </p>
              <p>
                Наразі працюю в творчій команді над створенням освітньої платформи, яка дозволить
                охопити більше учнів та надати їм якісні навчальні матеріали.
              </p>
              <p>
                Англійська - це провідник до прояву талантів моїх учнів. Кожному є що показати
                світу.
              </p>
              <p>Буду рада новим знайомствам і співпраці.</p>
            </BoxText>
          </ContentWrapp>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default About;
