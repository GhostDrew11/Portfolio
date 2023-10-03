import { styled, css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 5.2rem;
      font-weight: 700;
      line-height: 1.05;
      margin-bottom: 3.2rem;
      color: var(--color--slate-900);

      @media (max-width: 34em) {
        font-size: 3.6rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4.4rem;
      line-height: 1.2;
      margin-bottom: 0.8rem;
      padding-top: 4.6rem;
      color: var(--color--slate-700);

      @media (max-width: 34em) {
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      line-height: 1.2;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--color--purple-700);
      margin-bottom: 3.2rem;

      &.page {
        margin-bottom: 0;
      }
    `}
    
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1;
      padding-top: 1rem;
      color: var(--color--slate-800);
      transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    `}
`;

export default Heading;
