import { NavHashLink } from "react-router-hash-link";
import { styled } from "styled-components";

const StyledNavLink = styled(NavHashLink)`
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

function NavList({ onCloseModal }) {
  return (
    <>
      <li>
        <StyledNavLink smooth to="#about" onClick={() => onCloseModal?.()}>
          About
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink smooth to="#stacks" onClick={() => onCloseModal?.()}>
          Stacks
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink smooth to="#projects" onClick={() => onCloseModal?.()}>
          Projects
        </StyledNavLink>
      </li>
      <li>
        <StyledNavCta smooth to="#cta" onClick={() => onCloseModal?.()}>
          Contact me
        </StyledNavCta>
      </li>
    </>
  );
}

export default NavList;
