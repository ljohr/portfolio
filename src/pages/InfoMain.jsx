import common from "./InfoWindow.module.css";
import styles from "./InfoMain.module.css";

const InfoMain = ({ setActiveComponent }) => {
  return (
    <section className={styles.infoMain}>
      <div className={styles.infoContent}>
        <h1 className={styles.name}>Lilly Ohr</h1>
        <h3 className={styles.subtitle}>Software Engineer</h3>

        <ul className={styles.infoMainList}>
          <li>
            <button onClick={() => setActiveComponent("About")}>About</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent("Experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => setActiveComponent("Contact")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InfoMain;
