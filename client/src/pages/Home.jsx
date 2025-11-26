// Home.js
import { useState } from "react";
import styles from "./Home.module.css";
import MenuBar from "../components/MenuBar";
import PopUp from "./PopUp";
import InfoMain from "./InfoMain";
import Projects from "./Projects";
import graphIcon from "../assets/graph-icon.png";
import infoCenterIcon from "../assets/info-center.png";

const Home = () => {
  // Track multiple open windows by ID
  const [openWindows, setOpenWindows] = useState({});
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Define icon configurations
  const iconConfigs = {
    homeIcon: {
      id: "homeIcon",
      component: "InfoMain",
      title: "Info Center",
    },
    algoVisualizerIcon: {
      id: "algoVisualizerIcon",
      component: "Projects",
      title: "Algorithm Visualizer",
    },
    algoVisualizerIcon2: {
      id: "algoVisualizerIcon2",
      component: "Projects",
      title: "Algorithm Visualizer",
    },
  };

  const handleDoubleClick = (iconId) => {
    setOpenWindows((prev) => ({
      ...prev,
      [iconId]: true,
    }));
  };

  const closePopUp = (iconId) => {
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      delete newWindows[iconId];
      return newWindows;
    });
  };

  const handleContainerClick = () => {
    setSelectedIcon(null);
  };

  const handleIconClick = (e, iconId) => {
    e.stopPropagation();
    setSelectedIcon(selectedIcon === iconId ? null : iconId);
  };

  const renderWindowContent = (componentName) => {
    switch (componentName) {
      case "InfoMain":
        return <InfoMain />;
      case "Projects":
        return <Projects />;
      default:
        return <InfoMain />;
    }
  };

  return (
    <section className={styles.homeSection}>
      <MenuBar />
      <div className={styles.container} onClick={handleContainerClick}>
        <div className={styles.iconsContainer}>
          <div onDoubleClick={() => handleDoubleClick("homeIcon")}>
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
          </div>
          <div onDoubleClick={() => handleDoubleClick("algoVisualizerIcon")}>
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
          </div>
          <div onDoubleClick={() => handleDoubleClick("algoVisualizerIcon2")}>
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
      </div>
      {/* Render all open windows */}
      {Object.keys(openWindows).map((iconId, index) => {
        const config = iconConfigs[iconId];
        if (!config) return null;
        return (
          <PopUp
            key={iconId}
            show={openWindows[iconId]}
            onClose={() => closePopUp(iconId)}
            title={config.title}
            offset={index * 30}
          >
            {renderWindowContent(config.component)}
          </PopUp>
        );
      })}
    </section>
  );
};

export default Home;
