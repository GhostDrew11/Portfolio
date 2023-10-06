import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";

const Overlay = styled.div`
  display: none;

  @media (max-width: 59em) {
    position: fixed;
    display: initial;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(0.4rem);
    z-index: 1000;
    transition: all 0.3s;
  }
`;

const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70dvw;
  height: 100dvh;
  background-color: var(--color--purple-200);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 4.8rem;
  height: 4.8rem;
  top: 2.4rem;
  right: 4.8rem;
  position: absolute;
  color: var(--color--slate-900);

  &:hover {
    color: var(--color--purple-700);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(40dvh);
  gap: 4.8rem;
`;

const ModalNavContext = createContext();

function ModalNav({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalNavContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalNavContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalNavContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalNavContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledNavBar ref={ref}>
        <StyledIcon icon={faX} onClick={close} />
        <StyledList>
          {cloneElement(children, { onCloseModal: close })}
        </StyledList>
      </StyledNavBar>
    </Overlay>,
    document.querySelector("#header")
  );
}

ModalNav.Open = Open;
ModalNav.Window = Window;

export default ModalNav;
