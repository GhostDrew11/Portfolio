import { styled } from "styled-components";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import Vigor from "../pages/Vigor";

const StyledProjects = styled.section`
  padding: 20.8rem 0;
  background-color: var(--color--white-25);
`;

const ProjectsContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: 97em) {
    max-width: 120rem;
  }
`;

const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.7rem;

  @media (max-width: 97rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 68em) {
    grid-template-columns: repeat(2, minmax(15rem, 1fr));
  }

  @media (max-width: 44em) {
    grid-template-columns: repeat(1, minmax(15rem, 1fr));
  }
`;

const projects = [
  {
    id: 0,
    logo: "/Projects_logos/vigor.png",
    title: "Vigor Strength",
    path: "/projects/pizza",
  },
];

function Projects() {
  return (
    <StyledProjects id="projects">
      <ProjectsContainer>
        <Heading as="h4">Projects</Heading>
        <Vigor />
      </ProjectsContainer>
    </StyledProjects>
  );
}

export default Projects;

// const projects = [
//   {
//     id: 0,
//     logo: "/Projects_logos/wild-oasis.png",
//     title: "The Wild Oasis",
//     path: "/projects/oasis",
//   },
//   {
//     id: 1,
//     logo: "/Projects_logos/vigor.png",
//     title: "Vigor Strength",
//     path: "/projects/pizza",
//   },
//   {
//     id: 2,
//     logo: "/Projects_logos/worldwise.png",
//     title: "World Wise",
//     path: "/projects/wise",
//   },
//   {
//     id: 3,
//     logo: "/Projects_logos/forkify.png",
//     title: "Forkify",
//     path: "/projects/forkify",
//   },
//   {
//     id: 4,
//     logo: "/Projects_logos/bankist.png",
//     title: "Bankist",
//     path: "/projects/bankist",
//   },
//   {
//     id: 5,
//     logo: "/Projects_logos/mapty.png",
//     title: "Mapty",
//     path: "/projects/mapty",
//   },
// ];

// function Projects() {
//   return (
//     <StyledProjects id="projects">
//       <ProjectsContainer>
//         <Heading as="h4">Projects</Heading>
//         <ProjectsGrid>
//           {projects.map((project) => (
//             <li key={project.id}>
//               <Link to={project.path}>
//                 <ProjectCard
//                   logo={project.logo}
//                   title={project.title}
//                   description={project.description}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ProjectsGrid>
//       </ProjectsContainer>
//     </StyledProjects>
//   );
// }

// export default Projects;
