import styles from "./InfoMain.module.css";

const InfoMain = ({ setActiveComponent }) => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.name}>Lilly Ohr</h1>
      <h3 className={styles.subtitle}>Software Engineer</h3>

      <ul>
        <li>
          <button onClick={() => setActiveComponent("About")}>About</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("Projects")}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("Experience")}>
            Experience
          </button>
        </li>
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
