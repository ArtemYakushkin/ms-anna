import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

import { Container } from "./Container";

import merkulova from "../assets/merkulova.jpg";
import garkusha from "../assets/garkusha.jpg";
import tarapata from "../assets/tarapata.jpg";
import lupan from "../assets/lupan.jpg";
import marina from "../assets/marina.jpg";
import reviewsBg from "../assets/reviews-bg.jpg";

const reviews = [
  {
    id: 1,
    avatar: merkulova,
    title: "Катерина - мама  учениці, 5 років",
    date: "23.12.2024р.",
    text: "Їй справді все подобається. Сьогодні сказала сідай займатись, так вона і приладдя всі підготувала, і з задоволенням почала займатися. І бачу, що вона вже почала звикати до такого формату. Спочатку соромилась і дивитись, і записувати відео. А зараз сидить вчить, як вона буде відповідати і відео вже пише легко. Мені це подобається.",
  },
  {
    id: 2,
    avatar: marina,
    title: "Марина - мама учениці, 9 років",
    date: "18.10.2024р.",
    text: "Насправді, мало ми займаємося, але ви уявляєте, два уроки в тиждень з вами, і шкільну програму вона проходить не напружуючись. Дякую)) Англійська - єдиний предмет, який вона вчить та робить ДЗ...",
  },
  {
    id: 3,
    avatar: garkusha,
    title: "Єкатерина - мама учениці, 7 років",
    date: "29.11.2024р.",
    text: "Моя донечка почала займатися англійською з Анною і я в повному захваті. Доня сама слідкує за оновленями уроків, чекає на нові і одразу приймається за виконання цікавих завдань. Обов’язково згадує у колективі чи то навчальному, чи то в спортивному, що в неї є класні англійські уроки. А коли Анна присилає наліпки, то взагалі любов-любовна. Для мене насолода, коли вона 13ти річного брата питає, чи він взагалі, таке слово знає? Маленька, а вже повчає! Дякую, що є чому повчати. А для мене, як для мами, дуже зручний формат каналу, зрозумілі завдання і є система заохочень.",
  },
  {
    id: 4,
    avatar: tarapata,
    title: "Ольга - мама учениці, 12 років",
    date: "10.10.2023р.",
    text: "Доброго ранку! Дякую! Питань немає, бо бачимо результат і дитина задоволена, і усвідомлює це, на уроках у школі відчуває себе впевнено. Дякуємо, Анно, за вашу кропітку працю! До зустрічі в жовтні.",
  },
  {
    id: 5,
    avatar: lupan,
    title: "Олена - мама учениці, 9 років",
    date: "05.09.2024р.",
    text: "Я в захваті :) бо дитину жодного разу не вмовляла іти до тебе на урок :) біжить навіть з двору, коли грає:) І окрема любов до контрольних. Нещодавно прокинулась  о 6 ранку і плаче. Каже, наснилось, що не потрапила на контрольну у Анни з англійської.",
  },
];

const Section = styled.section`
  border-bottom: 1px solid #c5c4c4;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }

  background-image: url(${reviewsBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  scroll-margin-top: 60px;

  @media (max-width: 425px) {
    scroll-margin-top: 47px;
  }
`;

const Wrapp = styled.div`
  position: relative;
  z-index: 2;
  border-left: 1px solid #c5c4c4;
  padding: 50px 40px 50px 0;

  @media (max-width: 768px) {
    padding: 20px 20px 20px 0;
  }

  @media (max-width: 425px) {
    padding: 20px 10px 20px 0;
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
    line-height: 40px;
  }
`;

const ItemWrapp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Item = styled.div`
  padding: 30px 20px 30px 40px;
  border-top: 1px solid #c5c4c4;
  border-right: 1px solid #c5c4c4;
  border-bottom: 1px solid #c5c4c4;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: rgba(90, 90, 90, 0.27);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 660px) {
    flex-direction: column;
    padding: 20px;
    gap: 0px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 660px) {
    gap: 20px;
  }

  @media (max-width: 570px) {
    gap: 6px;
  }
`;

const BoxNikname = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

const BoxAvatar = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BoxAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #323232;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    color: #323232;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #3e3e3e;
  max-height: ${({ open }) => (open ? "100%" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Arrow = styled.button`
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.3;
    }
    100% {
      scale: 1;
    }
  }

  animation: pulse 1.5s infinite ease-in-out;
`;

const Reviews = () => {
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const toggleReview = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Section id="reviews">
      <Container>
        <Wrapp ref={ref}>
          <Title>Зворотній зв’язок від батьків</Title>

          <ItemWrapp
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 2 }}
          >
            {reviews.map((review) => (
              <Item
                key={review.id}
                open={openId === review.id}
                onClick={() => toggleReview(review.id)}
              >
                <ItemContent>
                  <BoxNikname>
                    <BoxAvatar>
                      <img src={review.avatar} alt="" />
                    </BoxAvatar>
                    <BoxAuthor>
                      <p>{review.title}</p>
                      <span>{review.date}</span>
                    </BoxAuthor>
                  </BoxNikname>
                  <Text open={openId === review.id}>{review.text}</Text>
                </ItemContent>
                <Arrow open={openId === review.id}>
                  <IconWrapper>
                    <IoIosArrowDown size={30} />
                  </IconWrapper>
                </Arrow>
              </Item>
            ))}
          </ItemWrapp>
        </Wrapp>
      </Container>
    </Section>
  );
};

export default Reviews;
