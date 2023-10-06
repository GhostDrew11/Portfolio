import { styled } from "styled-components";
import NavList from "./NavList";

const StyledNavMenu = styled.nav`
  @media (max-width: 59em) {
    display: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;

function NavMenu() {
  return (
    <StyledNavMenu>
      <StyledList>
        <NavList />
      </StyledList>
    </StyledNavMenu>
  );
}

export default NavMenu;
