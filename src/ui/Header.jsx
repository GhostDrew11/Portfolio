import { styled } from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Sticky Header */
  height: 10rem;
  padding: 0 4.8rem;
  background-color: var(--color--purple-200);
  /* background-color: var(--color--purple-600); */
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavMenu />
      <MobileNav />
    </StyledHeader>
  );
}

export default Header;
