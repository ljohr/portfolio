import styles from "./Home.module.css";

import MenuBar from "../components/MenuBar";

import floppyDisk from "../assets/floppy-disk.png";
import graphIcon from "../assets/graph-icon.png";

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <MenuBar />
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div className={styles.desktopIcon}>
            <img src={floppyDisk} alt="infoIcon" />
            <p>Lilly Ohr</p>
          </div>
          <div className={styles.desktopIcon}>
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p>Algorithm </p>
            <p>Visualizer</p>
          </div>
          <div className={styles.desktopIcon}>
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p>Algorithm </p>
            <p>Visualizer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
