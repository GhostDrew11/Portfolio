import { styled } from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Stacks from "./Stacks";
import Projects from "./Projects";
import Footer from "./Footer";
import Cta from "./Cta";
import { StickyNavProvider } from "../contexts/StickyNavContext";

const StyledAppLayout = styled.div`
  height: 100dvh;
  overflow-x: hidden;
`;

function AppLayout() {
  return (
    <StickyNavProvider>
      <StyledAppLayout>
        <Header />
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Cta />
        <Footer />
      </StyledAppLayout>
    </StickyNavProvider>
  );
}

export default AppLayout;
