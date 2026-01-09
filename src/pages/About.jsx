import styles from "./InfoMain.module.css";

const About = ({ setActiveComponent }) => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.name}>About</h1>
      {/* <h3 className={styles.subtitle}>Software Engineer</h3> */}
      <p>
        Hi I&apos;m Lilly, a Software Engineer I on the AI Product team at
        FloQast. I graduated from Boston College with a BS in Computer Science
        and BA in Linguistics in 2024.
      </p>
      {/* <ul>
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
      </ul> */}
    </section>
  );
};

export default About;
