import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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

  return (
    <Section id="about">
      <Container>
        <Wrapp>
          <ContentWrapp ref={ref}>
            <BoxImg
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              <img src={aboutImg} alt="about img" />
            </BoxImg>
            <BoxText
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              <p>Привіт. Мене звати Анна Якушкіна. </p>
              <p>
                Я є дипломованим педагогом з кваліфікацією в галузі педагогіки та методики
                викладання. Моя спеціальність охоплює англійську та французьку мови, а також
                зарубіжну літературу.
              </p>
              <p>
                Маю понад 15 років досвіду викладання, протягом яких навчала близько 300 учнів.
                Багато з них успішно адаптувалися в англомовних країнах, таких як США, Франція та
                Канада, вступивши до місцевих шкіл без необхідності складання додаткових мовних
                іспитів. У своїй роботі я дотримуюся комунікативного методу навчання, приділяючи
                особливу увагу індивідуальному підходу до кожного учня.
              </p>
              <p>
                Для розширення доступу до навчання я розробила курс англійської мови для дошкільнят
                у форматі Telegram-каналу. Наразі працюю в команді над створенням освітньої
                платформи, яка дозволить охопити більше учнів та надати їм якісні навчальні
                матеріали.
              </p>
            </BoxText>
          </ContentWrapp>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default About;
