import { styled } from "styled-components";
import Heading from "./Heading";

const StyledSection = styled.section`
  padding: 20.8rem 0;
  background-color: var(--color--slate-50);
`;

const CtaContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 19.2rem;
  text-align: center;

  @media (max-width: 84em) {
    max-width: 120rem;
  }

  @media (max-width: 34em) {
    padding: 0 8rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color--purple-700);
`;

const StyledP = styled.p`
  margin-top: 3.2rem;
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 4.8rem;

  @media (max-width: 34em) {
    font-size: 2rem;
  }
`;

const StyledLinkButton = styled.a`
  &,
  &:link,
  &:visited {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
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

function Cta() {
  return (
    <StyledSection id="cta">
      <CtaContainer>
        <Heading as="h1">
          <StyledSpan>Get In Touch</StyledSpan>
        </Heading>
        <StyledP>
          I'm currently looking for a new position. Besides from that, if you'd
          like me to collaborate on a project, or even just say hello? Feel free
          to shoot me an email, I'll do my best to reach back out! 🤗
        </StyledP>
        <StyledLinkButton href="mailto:armelhell@gmail.com">
          Shoot
        </StyledLinkButton>
      </CtaContainer>
    </StyledSection>
  );
}

export default Cta;
