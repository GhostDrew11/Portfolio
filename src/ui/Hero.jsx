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

const text =
  "I am a software engineer specialized in front end based in Atlanta, GA. I am passionate about transforming my everyday creativity into cutting edge, user centric, digital experiences, all while crafting efficient and seamless code. Welcome to my portfolio, where I showcase my innovative canvas.";

function Hero() {
  return (
    <StyledHero id="hero">
      <HeroContainer>
        <Heading as="h2">Hello There 👋🏽!</Heading>
        <Heading as="h1">
          I am <StyledSpan>Armel Hell</StyledSpan>
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
