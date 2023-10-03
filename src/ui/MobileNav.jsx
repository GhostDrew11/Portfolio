import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

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
  /* color: var(--color--purple-700); */

  &:hover {
    color: var(--color--purple-700);
  }
`;

function MobileNav() {
  return (
    <StyledMenu>
      <StyledIcon icon={faBars} />
    </StyledMenu>
  );
}

export default MobileNav;
