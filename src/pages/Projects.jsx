import { InfoSideBar } from "../components/InfoSideBar";
import styles from "./InfoWindow.module.css";

const Projects = ({ setActiveComponent }) => {
  return (
    <div className={styles.infoContainer}>
      <InfoSideBar setActiveComponent={setActiveComponent} />
      <section className={styles.infoSection}>
        <h1 className={styles.name}>Projects</h1>
        <ul>
          <li>About</li>
          <li>
            <button onClick={() => setActiveComponent("Projects")}>
              Projects
            </button>
          </li>
          <li>Experience</li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
