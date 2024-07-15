import { styled } from "styled-components";
import Heading from "./Heading";

const StyledStacks = styled.section`
  padding: 20.8rem 0;
  background-color: var(--color--slate-50);
`;

const StacksContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 84em) {
    max-width: 120rem;
  }
`;

const StacksDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 8rem;

  @media (max-width: 34em) {
    font-size: 1.8rem;
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 9.6rem;
`;

const StackRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 8.6rem;
  filter: grayscale(100%);
  transition: all 0.3s ease;

  &:hover {
    filter: none;
  }

  &.post {
    transform: translateX(20%);
  }

  &.mongo {
    transform: translateX(7%);
  }
`;

// const PLogo = styled.img`
//   height: 7.4rem;
// `;

// const PLogo = styled.img`
//   height: 6.2rem;
// `;

function Stacks() {
  return (
    <StyledStacks id="stacks">
      <StacksContainer>
        <Heading as="h4">Stacks</Heading>
        <StacksDescription>
          Here are some of the latest technologies I've worked with:
        </StacksDescription>
        <StackGrid>
          <StackRow>
            <Logo src="Skills/html-5-svgrepo-com.svg" alt="HTML5" />
            <Logo src="Skills/css-3-svgrepo-com.svg" alt="CSS3" />
            <Logo
              src="Skills/tailwindcss-icon-svgrepo-com.svg"
              alt="Tailwind CSS"
            />
            <Logo src="Skills/js-svgrepo-com.svg" alt="JavaScript" />
          </StackRow>
          <StackRow>
            <Logo
              src="Skills/typescript-icon-svgrepo-com.svg"
              alt="TypeScript"
            />
            <Logo src="Skills/node-js-svgrepo-com.svg" alt="NodeJs" />
            <Logo src="Skills/go-svgrepo-com.svg" alt="Golang" />
            <Logo
              className="mongo"
              src="Skills/MongoDB_Logomark_SpringGreen.svg"
              alt="MongoDB"
            />
          </StackRow>
          <StackRow>
            <Logo src="Skills/react-svgrepo-com.svg" alt="React" />
            <Logo src="Skills/next-js-svgrepo-com.svg" alt="Next.js" />
            <Logo src="Skills/figma-svgrepo-com.svg" alt="Figma" />
            <Logo src="Skills/postman-icon-svgrepo-com.svg" alt="Postman" />
          </StackRow>
          {/* <StackRow>
            <Logo src="Skills/figma-svgrepo-com.svg" alt="Figma" />
            <Logo src="Skills/git-icon-svgrepo-com.svg" alt="Git" />
            <Logo src="Skills/jest-svgrepo-com.svg" alt="Jest" />
            <Logo src="Skills/cypress-svgrepo-com.svg" alt="Cypress" />
          </StackRow> */}
        </StackGrid>
      </StacksContainer>
    </StyledStacks>
  );
}

export default Stacks;
