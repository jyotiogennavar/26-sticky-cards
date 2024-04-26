import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

import styled from "styled-components";

const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return (
    <>
      <Wrapper ref={ref}>
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
`;

const Footer = styled.div`
  height: 50vh;
  background-color: black;
`;

const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <CardWrapper
      style={{
        // height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
      }}
    >
      <CardContent>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </CardContent>
      <Button
        href={card.routeTo}
        isOddCard={isOddCard}
        style={{ backgroundColor: card.backgroundColor }}
      >
        Learn More
        <FiArrowRight />
      </Button>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  
  height: 400px;
  transform-origin: top;
  background-color: wheat;
  border: 2px solid black;

  @media (min-width: 48rem) {
    padding: 1rem;
    height: 600px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin: 1rem;

  @media (min-width: 48rem) {
    flex-direction: row;
    margin: 4rem 4rem 0;
  }

  h3 {
    font-family: "Bebas Neue", sans-serif;

    font-size: 4rem;
    font-weight: 600;

    @media (min-width: 48rem) {
      font-size: 12rem;
      max-width: 50%;
    }
  }

  p {
    font-size: 1rem;

    @media (min-width: 48rem) {
      max-width: 30%;
      margin-top: 8rem;
    }
  }
`;

const Button = styled.a`
  text-decoration: none;
  width: 13rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 16px 24px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: uppercase;
  color: black;
  transition: all 0.3s;
  cursor: pointer;
  background-color: wheat;
  box-shadow: 4px 4px 0px black;
  margin-left: 1rem;

  &:hover {
    transform: translate(0.2rem, 0.2rem);
    box-shadow: none;
  }

  @media (min-width: 48rem) {
    font-size: 18px;  
    margin-left: 16rem;

  }
`;

;

export default StickyCards;

const CARD_HEIGHT = 600;

const CARDS = [
  {
    id: 1,

    title: "Dynamic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    backgroundColor: "#9F7AEA",
    routeTo: "#",
  },
  {
    id: 2,

    title: "Energetic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    backgroundColor: "#F48FB1",
    routeTo: "#",
  },
  {
    id: 3,

    title: "Vibrant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    backgroundColor: "#FBBF24",
    routeTo: "#",
  },
  {
    id: 4,

    title: "Active",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    backgroundColor: "#FCA5A5",
    routeTo: "#",
  },
];

