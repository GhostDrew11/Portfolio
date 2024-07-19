import { keyframes, styled } from "styled-components";
import Heading from "../ui/Heading";

const StyledDiv = styled.div`
  padding: 9.6rem 0;
`;

const StyledContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 84em) {
    max-width: 120rem;
  }
`;

const StyledGrid = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 14.6rem);
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.50;
  }
  75% {
   opacity: 0.75;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInText = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.50;
  }
  75% {
   opacity: 0.75;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 10;
  grid-row: 1/ -1;
  position: relative;
  border-radius: 0.4rem;
  animation: ${slideIn} 1s ease-in;

  @media (max-width: 44em) {
    grid-column: 1 / -1;
    background-color: var(--color--slate-100);
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;

  @media (max-width: 44em) {
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;

  @media (max-width: 44em) {
    filter: blur(0.2rem);
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;

  @media (max-width: 44em) {
    filter: blur(0.2rem);
  }
`;

const StyledDesc = styled.div`
  z-index: 1;
  text-align: right;
  grid-column: 8 / -1;
  grid-row: 1/ -1;
  padding: 4.8rem 0;
  animation: ${slideInText} 1s ease-in;

  @media (max-width: 44em) {
    grid-column: 1 / -1;
    text-align: initial;
    overflow-y: scroll;
    padding: 4.8rem 6.4rem;

    ul {
      justify-content: normal;
    }
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 1;
  border-radius: 0.4rem;
  margin-top: 4.8rem;
  margin-bottom: 3.2rem;
  background-color: var(--color--purple-200);
  padding: 3.2rem 2.4rem;
  text-align: justify;
`;

const StyledStackList = styled.ul`
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-end;
  gap: 2rem;

  li {
    font-weight: 500;
    color: var(--color--purple-700);
  }

  @media (max-width: 59em) {
    display: flex;
    font-size: 1rem;
  }

  @media (max-width: 44em) {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
    gap: 1rem;
  }
`;

const StyledLinkList = styled.ul`
  display: flex;
  margin-top: 2.4rem;
  justify-content: flex-end;
  gap: 1.6rem;
`;

const StyledLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.8rem 1.6rem;
    border-radius: 0.9rem;
    color: var(--color--yellow-200);
    background-color: var(--color--purple-400);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color--yellow-400);
    background-color: var(--color--purple-700);
  }
`;

const desc =
  "From blending my passions for sport and programming, and inspired by curiosity and the challenge of integrating these interests, was born Vigor. It's a fitness app that lets users track workouts and meals, create custom routines, monitor progress, and view workout history. Vigor also includes social features for connecting with friends and sharing progress. The app features a Go backend with MongoDB and Firebase for media storage, and a React Native frontend using TypeScript, Tanstack Query and React Context API. Currently in development, Vigor will be released soon.";

function Vigor() {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledGrid>
          <StyledWrapper>
            <StyledImgWrapper>
              <StyledVideo controls>
                <source
                  src="/Projects_img/VigorAppDemo2.m4v"
                  type="video/mp4"
                />
              </StyledVideo>
            </StyledImgWrapper>
          </StyledWrapper>

          <StyledDesc>
            <Heading as="h4">VIIGOR</Heading>
            <StyledParagraph>{desc}</StyledParagraph>

            <StyledStackList>
              <li>Go</li>
              <li>MongoDB</li>
              <li>FireBase</li>
              <li>React Native</li>
              <li>TypeScript</li>
            </StyledStackList>

            <StyledLinkList>
              <li>
                <StyledLink
                  href="https://pizza-armel.netlify.app"
                  target="_blank"
                >
                  BackEnd
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://github.com/GhostDrew11/Pizza"
                  target="_blank"
                >
                  FrontEnd
                </StyledLink>
              </li>
            </StyledLinkList>
          </StyledDesc>
        </StyledGrid>
      </StyledContainer>
    </StyledDiv>
  );
}

export default Vigor;
