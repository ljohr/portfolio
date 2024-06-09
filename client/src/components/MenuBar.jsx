import { useState } from "react";
import styles from "./MenuBar.module.css";
import appleLogo from "../assets/apple-logo.png";
import invertedAppleLogo from "../assets/inverted-apple-logo.png";

const MenuBar = () => {
  const [currentImage, setCurrentImage] = useState(appleLogo);

  const handleLogoClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === appleLogo ? invertedAppleLogo : appleLogo
    );
  };

  return (
    <ul className={styles.menuBar}>
      <li onClick={handleLogoClick}>
        <img src={currentImage} alt="apple-logo" className={styles.logoImg} />
      </li>
      <li>File</li>
      <li>Edit</li>
      <li>View</li>
      <li>Special</li>
    </ul>
  );
};

export default MenuBar;
