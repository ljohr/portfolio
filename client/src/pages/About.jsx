import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.name}>Lilly Ohr</h2>
      <h4 className={styles.subtitle}>Software Engineer</h4>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Resume</li>
      </ul>
    </section>
  );
};

export default About;
