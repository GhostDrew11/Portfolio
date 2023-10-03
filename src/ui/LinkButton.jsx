import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Heading from "./Heading";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
  color: var(--color--purple-200);
  transition: all 0.3s;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: white;
  transition: all 0.3s;

  &:hover {
    ${StyledIcon} {
      color: var(--color--purple-700);
    }
  }
`;

function LinkButton({ to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <StyledButton onClick={() => navigate(-1)}>
        <StyledIcon icon={faChevronLeft} />
        <Heading as="h4" className="page">
          Home
        </Heading>
      </StyledButton>
    );

  return <Link to={to}>{children}</Link>;
}

export default LinkButton;
