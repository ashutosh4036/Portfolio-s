import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/aaaa.webp';
import freshBurger from '../../assets/mern.webp';
import hipsster from '../../assets/port.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/ashutosh4036/Kanban_task_management"
          h3="Kanban_Board"
          p="Task Managment Website"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ashutosh4036/MERN-AI-CHAT-APP"
          h3="AI CHAT APP"
          p="MERN APPLICATION"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/ashutosh4036/Portfolio-s"
          h3="Potfolio"
          p="Personal Portfolio"
        />
        
      </div>
    </section>
  );
}

export default Projects;
