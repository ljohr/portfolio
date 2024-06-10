// Home.js
import { useState } from "react";
import styles from "./Home.module.css";
import MenuBar from "../components/MenuBar";
import PopUp from "./PopUp";
import About from "./About";
import floppyDisk from "../assets/floppy-disk.png";
import graphIcon from "../assets/graph-icon.png";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleDoubleClick = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <section className={styles.homeSection}>
      <MenuBar />
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div onDoubleClick={handleDoubleClick}>
            <div className={styles.desktopIcon}>
              <img src={floppyDisk} alt="infoIcon" />
              <p>Lilly Ohr</p>
            </div>
            <PopUp show={showPopUp} onClose={closePopUp}>
              <About />
            </PopUp>
          </div>
          <div className={styles.desktopIcon}>
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p>Algorithm</p>
            <p>Visualizer</p>
          </div>
          <div className={styles.desktopIcon}>
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p>Algorithm</p>
            <p>Visualizer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
