import common from "./InfoWindow.module.css";

import { InfoSideBar } from "../components/InfoSideBar";

const Experience = ({ setActiveComponent }) => {
  return (
    <div className={common.infoContainer}>
      <InfoSideBar setActiveComponent={setActiveComponent} />

      <section className={common.infoSection}>
        <h1 className={common.name}>Experience</h1>
        {/* FloQast */}
        <div className={common.jobContainer}>
          <div className={common.jobInfo}>
            <p className={common.employer}>FloQast</p>
            <p>Oct 2024 - Present</p>
          </div>

          <p className={common.jobTitle}>Software Engineer - AI Product</p>
        </div>
        {/* Geaux Network */}
        <div className={common.jobContainer}>
          <div className={common.jobInfo}>
            <p className={common.employer}>Geaux Network</p>
            <p>Apr 2024 - Sep 2024</p>
          </div>

          <p className={common.jobTitle}>Software Engineer Intern - Checkout</p>
        </div>
        {/* RA */}
        <div className={common.jobContainer}>
          <div className={common.jobInfo}>
            <p className={common.employer}>Boston College</p>
            <p>Sep 2023 - May 2024</p>
          </div>

          <p className={common.jobTitle}>HCD Research Assistant</p>
        </div>
        {/* TA */}
        <div className={common.jobContainer}>
          <div className={common.jobInfo}>
            <p className={common.employer}>Boston College</p>
            <p>Jan 2023 - May 2024</p>
          </div>

          <p className={common.jobTitle}>Teaching Assistant</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
