import { NavHashLink } from "react-router-hash-link";
import { styled } from "styled-components";

const StyledNavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 59em) {
    display: none;
  }
`;

const StyledNavLink = styled(NavHashLink)`
  &,
  &:link,
  &:visited {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color--slate-900);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color--purple-700);
  }
`;

const StyledNavCta = styled(NavHashLink)`
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

function NavMenu() {
  return (
    <StyledNavMenu>
      <li>
        <StyledNavLink smooth to="#about">
          About
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink smooth to="#stacks">
          Stacks
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink smooth to="#projects">
          Projects
        </StyledNavLink>
      </li>
      <li>
        <StyledNavCta smooth to="#cta">
          Contact me
        </StyledNavCta>
      </li>
    </StyledNavMenu>
  );
}

export default NavMenu;
