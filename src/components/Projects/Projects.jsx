import styles from "./ProjectsStyles.module.css";
import sessionConnect from "../../assets/SCLogo_blue.svg";
import cinemaProject from "../../assets/cinema-project.svg";
import badUiChallenge from "../../assets/bad-ui-challenge.svg";
import iMock from "../../assets/i-mock.svg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sessionConnect}
          link={"https://github.com/itsYuuuka/session-connect"}
          h3="Session Connect"
          p="Session Connect is a platform that connects musicians and producers to
          collaborate on music projects."
        />
        <ProjectCard
          src={cinemaProject}
          link={"https://github.com/itsYuuuka/cinema-project"}
          h3="Cinema Project"
          p="Cinema Project is a Java-based cinema management system built with Spring Boot that streamlines managing cinemas, halls, and movies."
        />
        <ProjectCard
          src={badUiChallenge}
          link={"https://github.com/web-altun/bad-ui-challenge"}
          h3="Bad Ui Challenge"
          p="The Bad UI Challenge is a project where I intentionally built a website using HTML, CSS, and JavaScript to deliver a purposely awful user experience."
        />
        <ProjectCard
          src={iMock}
          link={"https://github.com/itsYuuuka/i-mock"}
          h3="iMock"
          p="Recreated from the ground up, iMock mirrors the iconic iPhone site. It’s not innovation — it’s imitation at its finest."
        />
      </div>
    </section>
  );
}

export default Projects;
