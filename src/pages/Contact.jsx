import common from "./InfoWindow.module.css";
import { InfoSideBar } from "../components/InfoSideBar";

const Contact = ({ setActiveComponent }) => {
  return (
    <div className={common.infoContainer}>
      <InfoSideBar setActiveComponent={setActiveComponent} />
      <section className={common.infoSection}>
        <h1 className={common.name}>Contact</h1>
        <p>
          Always happy to chat about software engineering, AI, or interesting
          projects. Feel free to reach out on{" "}
          <a href='https://www.linkedin.com/in/lillyohr/' target='_blank'>
            LinkedIn
          </a>.
        </p>
      </section>
    </div>
  );
};

export default Contact;
