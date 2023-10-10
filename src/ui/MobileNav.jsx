import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import ModalNav from "./ModalNav";
import NavList from "./NavList";

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 59em) {
    display: block;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 4.8rem;
  height: 4.8rem;
  color: var(--color--slate-900);

  &:hover {
    color: var(--color--purple-700);
  }
`;

function MobileNav() {
  return (
    <StyledMenu>
      <ModalNav>
        <ModalNav.Open opens="nav-menu">
          <StyledIcon icon={faBars} />
        </ModalNav.Open>
        <ModalNav.Window name="nav-menu">
          <NavList />
        </ModalNav.Window>
      </ModalNav>
    </StyledMenu>
  );
}

export default MobileNav;
