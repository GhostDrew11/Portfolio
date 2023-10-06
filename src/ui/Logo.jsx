import { styled } from "styled-components";
import Heading from "./Heading";
import { NavHashLink } from "react-router-hash-link";

const StyledLogo = styled.img`
  height: 8rem;
`;

const StyledLink = styled(NavHashLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 2rem;
    transition: all 0.3s;
    color: var(--color--slate-900);
  }

  &:hover,
  &:active {
    color: var(--color--purple-700);
  }

  @media (max-width: 59em) {
    z-index: 1001;
  }

  @media (max-width: 53em) {
    ${Heading} {
      display: none;
    }
  }
`;

function Logo() {
  return (
    <StyledLink to="#">
      <StyledLogo alt="Portfolio Logo" src="/public/greeting-mel.png" />
      <Heading as="h3">Armel Hell</Heading>
    </StyledLink>
  );
}

export default Logo;
