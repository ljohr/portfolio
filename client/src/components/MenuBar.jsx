import styles from "./MenuBar.module.css";
import appleLogo from "../assets/apple-logo.png";

const MenuBar = () => {


  return (
    <ul className={styles.menuBar}>
      <li>
        <img src={appleLogo} alt="apple-logo" className={styles.logoImg} />
      </li>
      <li>File</li>
      <li>Edit</li>
      <li>View</li>
      <li>Special</li>
    </ul>
  );
};

export default MenuBar;
