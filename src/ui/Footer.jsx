import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
  background-color: var(--color--purple-250);
`;

const FooterContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

const Copyright = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-top: auto;
  color: var(--color--slate-600);
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  @media (max-width: 34em) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 4.8rem;

    ${Copyright} {
      font-size: 2rem;
    }
  }
`;

const StyledIconList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 3.6rem;
  height: 3.6rem;
  color: var(--color--slate-600);

  &:hover {
    color: var(--color--purple-700);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledContent>
          <Copyright>Copyright &copy; 2024 MelXYZ.Inc</Copyright>
          <StyledIconList>
            <li>
              <a href="https://www.linkedin.com/in/armelhell/" target="_blank">
                <StyledIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/GhostDrew11" target="_blank">
                <StyledIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/xyzMel11" target="_blank">
                <StyledIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/GhostDrew11" target="_blank">
                <StyledIcon icon={faCodepen} />
              </a>
            </li>
          </StyledIconList>
        </StyledContent>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
