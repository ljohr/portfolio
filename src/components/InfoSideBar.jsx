import styles from "./InfoSideBar.module.css";

export const InfoSideBar = ({ setActiveComponent }) => {
  return (
    <section className={styles.InfoSideBar}>
      <h3>
        <button onClick={() => setActiveComponent("InfoMain")}>
          Lilly Ohr
        </button>
      </h3>
      <ul>
        <li>
          <button onClick={() => setActiveComponent("About")}>About</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("Experience")}>
            Experience
          </button>
        </li>
        {/* <li>
          <button onClick={() => setActiveComponent("Projects")}>
            Projects
          </button>
        </li> */}
        <li>
          <button onClick={() => setActiveComponent("Contact")}>
            Contact
          </button>
        </li>
      </ul>
    </section>
  );
};
