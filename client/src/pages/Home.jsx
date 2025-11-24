// Home.js
import { useState } from "react";
import styles from "./Home.module.css";
import MenuBar from "../components/MenuBar";
import PopUp from "./PopUp";
import InfoMain from "./InfoMain";
import floppyDisk from "../assets/floppy-disk.png";
import graphIcon from "../assets/graph-icon.png";
import infoCenterIcon from "../assets/info-center.png";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleDoubleClick = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const handleContainerClick = () => {
    setSelectedIcon(null);
  };

  const handleIconClick = (e, iconId) => {
    e.stopPropagation();
    setSelectedIcon(selectedIcon === iconId ? null : iconId);
  };

  return (
    <section className={styles.homeSection}>
      <MenuBar />
      <div className={styles.container} onClick={handleContainerClick}>
        <div className={styles.iconsContainer}>
          <div onDoubleClick={handleDoubleClick}>
            <div
              className={styles.desktopIcon}
              onClick={(e) => handleIconClick(e, "homeIcon")}
            >
              <img src={infoCenterIcon} alt="infoIcon" />
              <p
                className={
                  selectedIcon === "homeIcon"
                    ? styles.iconTextClicked
                    : styles.iconText
                }
              >
                Mac OS Info Center
              </p>
            </div>
            <PopUp show={showPopUp} onClose={closePopUp}>
              <InfoMain />
            </PopUp>
          </div>
          <div
            className={styles.desktopIcon}
            onClick={(e) => handleIconClick(e, "algoVisualizerIcon")}
          >
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p
              className={
                selectedIcon === "algoVisualizerIcon"
                  ? styles.iconTextClicked
                  : styles.iconText
              }
            >
              Algorithm Visualizer
            </p>
          </div>
          <div
            className={styles.desktopIcon}
            onClick={(e) => handleIconClick(e, "algoVisualizerIcon2")}
          >
            <img src={graphIcon} alt="algoVisualizerIcon" />
            <p
              className={
                selectedIcon === "algoVisualizerIcon2"
                  ? styles.iconTextClicked
                  : styles.iconText
              }
            >
              Algorithm Visualizer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
