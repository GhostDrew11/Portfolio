import { styled } from "styled-components";
import Heading from "./Heading";

const StyledAbout = styled.section`
  padding: 17.6rem 0;
`;

const AboutContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 84em) {
    max-width: 120rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 9.6rem;
  align-items: center;

  @media (max-width: 84em) {
    grid-template-columns: 1fr;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 1.6rem;

  @media (max-width: 34em) {
    font-size: 1.8rem;
  }
`;

const StyledWrapper = styled.div`
  width: 35rem;
  height: 35rem;
  transform: translate(50%);
  position: relative;
  background-color: var(--color--purple-200);
  border-radius: 0.9rem;
  transition: all 0.3s;

  &:before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color--slate-50);
    mix-blend-mode: screen;
    border-radius: 0.9rem;
  }

  &:after {
    content: "";
    position: absolute;
    top: 1.4rem;
    left: 1.4rem;
    width: 100%;
    height: 100%;
    border: 0.2rem solid var(--color--purple-400);
    border-radius: 0.9rem;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    transform: translate(48%, -2%);

    &:after {
      transform: translate(1.4rem, 1.4rem);
      border: 0.2rem solid var(--color--purple-700);
    }
  }

  @media (max-width: 84em) {
    margin: 0 auto;
    transform: none;

    &:hover {
      transform: translate(-0.4rem, -0.4rem);

      &:after {
        transform: translate(0.8rem, 0.8rem);
      }
    }
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
  border-radius: 0.9rem;
  filter: grayscale(100%) contrast(1);
  mix-blend-mode: luminosity;
  transition: all 0.3s;

  &:hover {
    filter: none;
    mix-blend-mode: normal;
  }
`;

const StyledImg = styled.img`
  width: 35rem;
  height: 35rem;
  border-radius: 0.9rem;
  object-fit: cover;
`;

const desc1 =
  "For the past five years, my passion has revolved around web development, frontend work, and UI/UX design. Initially, I observed these fields from afar, but it wasn't until my junior year of college, roughly three years ago, that I decided to dive in headfirst. After graduating, I secured a position as a frontend engineer at Itential, where I collaborated with incredibly talented individuals to simplify and scale network automation through Itential's web application suite.";

const desc2 =
  "Unfortunately, I was unexpectedly laid off in May 2023 due to budget cuts. This setback only fueled my determination to learn more. I went back to the basics, starting with HTML and CSS and working my way up to React and React Native, all in an effort to enhance my software engineering skills and deepen my understanding of web development and design fundamentals.";

const desc3 =
  "Today, as I actively seek new opportunities, my focus remains on building diverse, accessible, and inclusive products, including websites and web/mobile applications. Guided by curiosity, creativity, and the desire for self-improvement, I strive to contribute to the tech world.";

const desc4 =
  "When I'm not coding or exploring new tech stacks, I enjoy playing basketball, reading books on subjects like love, mental toughness, discipline, sports, and spirituality, or spending quality time with friends and family.";

function About() {
  return (
    <StyledAbout id="about">
      <AboutContainer>
        <Heading as="h4">About</Heading>
        <AboutGrid>
          <div>
            <AboutDescription>{desc1}</AboutDescription>
            <AboutDescription>{desc2}</AboutDescription>
            <AboutDescription>{desc3}</AboutDescription>
            <AboutDescription>{desc4}</AboutDescription>
          </div>
          <StyledWrapper>
            <StyledImgWrapper>
              <StyledImg src="/Visa Pic.jpg" alt="Armel Hell Pic" />
            </StyledImgWrapper>
          </StyledWrapper>
        </AboutGrid>
      </AboutContainer>
    </StyledAbout>
  );
}

export default About;
