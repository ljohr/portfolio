import styles from "./InfoMain.module.css";

const About = ({ setActiveComponent }) => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.name}>About</h1>
      <p>
        Hi, I&apos;m Lilly, a software engineer on the AI Product Team at{" "}
        <a href='https://www.floqast.com/' target='_blank'>
          FloQast
        </a>{" "}
        where we build our AI platform, Transform. I joined before launch and
        have been contributing to the product's development ever since. I've
        often been tasked with problems that have no immediate answer, and
        finding viable solutions is what I find most challenging and rewarding
        about software engineering. Previously, I studied Computer Science and
        Linguistics at Boston College.
      </p>
    </section>
  );
};

export default About;
