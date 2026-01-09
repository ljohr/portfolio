import styles from "./InfoWindow.module.css";

import { InfoSideBar } from "../components/InfoSideBar";

const Experience = ({ setActiveComponent }) => {
  return (
    <div className={styles.infoContainer}>
      <InfoSideBar setActiveComponent={setActiveComponent} />

      <section className={styles.infoSection}>
        <h1 className={styles.name}>Experience</h1>
        {/* FloQast */}
        <div className={styles.jobContainer}>
          <div className={styles.jobInfo}>
            <p className={styles.employer}>FloQast</p>
            <p>Oct 2024 - Present</p>
          </div>

          <p className={styles.jobTitle}>Software Engineer - AI Product</p>
        </div>
        {/* Geaux Network */}
        <div className={styles.jobContainer}>
          <div className={styles.jobInfo}>
            <p className={styles.employer}>Geaux Network</p>
            <p>Apr 2024 - Sep 2024</p>
          </div>

          <p className={styles.jobTitle}>Software Engineer Intern - Checkout</p>
        </div>
        {/* RA */}
        <div className={styles.jobContainer}>
          <div className={styles.jobInfo}>
            <p className={styles.employer}>Boston College</p>
            <p>Sep 2023 - May 2024</p>
          </div>

          <p className={styles.jobTitle}>HCD Research Assistant</p>
        </div>
        {/* TA */}
        <div className={styles.jobContainer}>
          <div className={styles.jobInfo}>
            <p className={styles.employer}>Boston College</p>
            <p>Jan 2023 - May 2024</p>
          </div>

          <p className={styles.jobTitle}>Teaching Assistant</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
