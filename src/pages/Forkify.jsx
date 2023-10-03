import { keyframes, styled } from "styled-components";
import LinkButton from "../ui/LinkButton";
import Heading from "../ui/Heading";

const StyledDiv = styled.div`
  padding: 9.6rem 0;
`;

const StyledContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
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
`;

const StyledImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  /*filter: grayscale(100%) contrast(1);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }*/
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;

const StyledDesc = styled.div`
  z-index: 1;
  text-align: right;
  grid-column: 8 / -1;
  grid-row: 1/ -1;
  padding: 4.8rem 0;

  animation: ${slideInText} 1s ease-in;
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 1;
  border-radius: 0.4rem;
  margin-top: 4.8rem;
  margin-bottom: 3.2rem;
  background-color: var(--color--purple-200);
  padding: 3.2rem 2.4rem;
`;

const StyledStackList = styled.ul`
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-end;
  gap: 2rem;

  li {
    font-weight: 500;
    color: var(--color--slate-900);
  }
`;

const StyledLinkList = styled.ul`
  display: flex;
  margin-top: 2.4rem;
  justify-content: flex-end;
  gap: 1.6rem;
`;

const StyledLink = styled.a`
  &,
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
  "A web application displaying recipes to any user. Users can search and select a specific recipe, and be provided with specific ingredients and recipe instructions. Ingredient quantities are automatically updated if the users update the servings. Adding and bookmarking any recipe are also available features. The app utilizes a pre-existing REST API";

function Forkify() {
  return (
    <StyledDiv>
      <StyledContainer>
        <LinkButton to="-1" />

        <StyledGrid>
          <StyledWrapper>
            <StyledImgWrapper>
              <StyledImg
                src="/Projects_img/Forkify.png"
                alt="Forkify Screenshot"
              />
            </StyledImgWrapper>
          </StyledWrapper>

          <StyledDesc>
            <Heading as="h4">Forkify</Heading>
            <StyledParagraph>{desc}</StyledParagraph>

            <StyledStackList>
              <li>Vanilla JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </StyledStackList>

            <StyledLinkList>
              <li>
                <StyledLink>Live Site</StyledLink>
              </li>
              <li>
                <StyledLink>GitHub</StyledLink>
              </li>
            </StyledLinkList>
          </StyledDesc>
        </StyledGrid>
      </StyledContainer>
    </StyledDiv>
  );
}

export default Forkify;
