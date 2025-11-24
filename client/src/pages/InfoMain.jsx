import styles from "./InfoMain.module.css";

const InfoMain = ({ setActiveComponent }) => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.name}>Lilly Ohr</h2>
      <h4 className={styles.subtitle}>Software Engineer</h4>
      <ul>
        <li>About</li>
        <li>
          <button onClick={() => setActiveComponent("Projects")}>
            Projects
          </button>
        </li>
        <li>Experience</li>
        <li>Resume</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </section>
  );
};

export default InfoMain;
