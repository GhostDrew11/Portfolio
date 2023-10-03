import { styled } from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Stacks from "./Stacks";
import Projects from "./Projects";
import Footer from "./Footer";
import Cta from "./Cta";

const StyledAppLayout = styled.div`
  height: 100dvh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Cta />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
