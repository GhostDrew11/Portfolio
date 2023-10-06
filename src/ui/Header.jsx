import { css, styled } from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import { useStickyNav } from "../contexts/StickyNavContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Sticky Header */
  height: 10rem;
  padding: 0 4.8rem;
  background-color: var(--color--purple-200);

  ${(props) =>
    props.$sticky &&
    css`
      position: sticky;
      top: 0;
      bottom: 0;
      width: 100dvw;
      height: 8rem;
      padding-top: 0;
      padding-bottom: 0;
      background-color: var(--color--white-50);
      z-index: 999;
      box-shadow: 0 0.4rem 0.6rem -0.1rem rgb(0 0 0 / 0.1);
    `}
`;

function Header() {
  const { isSticky } = useStickyNav();

  return (
    <StyledHeader $sticky={isSticky} id="header">
      <Logo />
      <NavMenu />
      <MobileNav />
    </StyledHeader>
  );
}

export default Header;
