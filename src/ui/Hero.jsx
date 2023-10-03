import { styled } from "styled-components";
import Heading from "./Heading";
import { NavHashLink } from "react-router-hash-link";

const StyledHero = styled.section`
  padding: 22.4rem 0;
  background-color: var(--color--purple-200);
`;

const HeroContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  align-items: center;

  @media (max-width: 84em) {
    max-width: 120rem;
  }

  @media (max-width: 59em) {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 12.8rem;
  }

  @media (max-width: 34em) {
    align-items: flex-start;
    padding: 4.8rem 4.8rem 12.8rem;
  }
`;

const StyledDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
  font-weight: 400;

  @media (max-width: 59em) {
    text-align: center;
  }

  @media (max-width: 34em) {
    text-align: left;
  }
`;

const StyledNavCta = styled(NavHashLink)`
  &,
  &:link,
  &:visited {
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 0.9rem;
    background-color: var(--color--purple-400);
    transition: all 0.3s;
    color: var(--color--yellow-200);
  }

  &:hover,
  &:active {
    color: var(--color--yellow-400);
    background-color: var(--color--purple-700);
  }
`;

const StyledSpan = styled.span`
  color: var(--color--purple-700);
`;

// const text =
//   "My name is Armel Hell, frontend developer based in Atlanta, GA. I've been passionated about web development, design and infography for about 5 years but was only observing from a far. I've been giving it a real shot for 3 years now and since then it's been an incredible journey of blending creativity, daily inspiration all around the web, learning and bettering myself everyday";

const text =
  "A software engineer specialized in frontend based in Atlanta, GA. I am passionated about transforming my everyday creativity into cut-edge user centric digital experiences. All while crafting efficient and seamless code. Welcome to my portfolio, where I showcase my creative canvas.";

function Hero() {
  return (
    <StyledHero>
      <HeroContainer>
        <Heading as="h2">Hello There 👋🏽!</Heading>
        <Heading as="h1">
          I am <StyledSpan>Armel Hell,</StyledSpan>
        </Heading>
        <StyledDescription>{text}</StyledDescription>
        <StyledNavCta smooth to="#about">
          Learn more &darr;
        </StyledNavCta>
      </HeroContainer>
    </StyledHero>
  );
}

export default Hero;
