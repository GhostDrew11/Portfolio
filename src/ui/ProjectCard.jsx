import { styled } from "styled-components";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 3.6rem;
  height: 3.6rem;
  color: var(--color--purple-200);
  transition: all 0.3s;
`;

const LogoContainer = styled.div`
  min-width: 40rem;
  height: 20rem;
  border: solid 4px var(--color--purple-400);
  border-radius: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  transition: all 0.3s;

  @media (max-width: 97em) {
    min-width: 53rem;
    height: 20rem;
  }

  @media (max-width: 69em) {
    min-width: 15rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color--white);

  border-radius: 1rem;
  box-shadow: 0 1rem 1.5rem -0.4rem rgb(0 0 0 / 0.15);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 2rem 2.5rem 0.5rem rgb(0 0 0 / 0.1);

    ${StyledIcon} {
      color: var(--color--purple-700);
    }

    ${LogoContainer} {
      background-color: var(--color--purple-200);
    }

    ${Heading} {
      transform: scale(1.05);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      color: var(--color--purple-700);
    }
  }
`;

const StyledLogoWrapper = styled.div`
  border-radius: 0.9rem;
`;

const StyledLogo = styled.img`
  width: 35rem;
  height: 15rem;
  object-fit: contain;

  /* @media (max-width: 69em) {
    width: 20rem;
    height: 10rem;
  } */
`;

const CardContent = styled.div`
  padding: 2.4rem 1.2rem;
  display: flex;
  justify-content: space-between;
`;

function ProjectCard({ logo, title }) {
  return (
    <StyledCard>
      <LogoContainer>
        <StyledLogoWrapper>
          <StyledLogo src={logo} />
        </StyledLogoWrapper>
      </LogoContainer>
      <CardContent>
        <Heading as="h5">{title}</Heading>
        <StyledIcon icon={faChevronRight} />
      </CardContent>
    </StyledCard>
  );
}

export default ProjectCard;
