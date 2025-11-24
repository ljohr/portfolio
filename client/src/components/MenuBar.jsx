import { useState, useEffect, useRef } from "react";
import styles from "./MenuBar.module.css";
import appleLogo from "../assets/apple-logo.png";

const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuBarRef = useRef(null);

  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  const menuItems = {
    Apple: ["About This Computer..."],
    File: ["About This Computer...", "Calculator", "Chooser", "Find File"],
    Edit: ["Undo", "Cut", "Copy", "Paste"],
    View: ["by Name", "by Icon", "by Date"],
    Special: ["Empty Trash", "Erase Disk", "Restart", "Shut Down"],
  };

  return (
    <div className={styles.menuBarWrapper} ref={menuBarRef}>
      <ul className={styles.menuBar}>
        <li
          className={`${styles.menuItem} ${
            openMenu === "Apple" ? styles.menuItemOpen : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuClick("Apple");
          }}
        >
          <img src={appleLogo} alt="apple-logo" className={styles.logoImg} />
          {openMenu === "Apple" && (
            <ul className={styles.dropdown}>
              {menuItems.Apple.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${
            openMenu === "File" ? styles.menuItemOpen : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuClick("File");
          }}
        >
          File
          {openMenu === "File" && (
            <ul className={styles.dropdown}>
              {menuItems.File.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${
            openMenu === "Edit" ? styles.menuItemOpen : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuClick("Edit");
          }}
        >
          Edit
          {openMenu === "Edit" && (
            <ul className={styles.dropdown}>
              {menuItems.Edit.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${
            openMenu === "View" ? styles.menuItemOpen : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuClick("View");
          }}
        >
          View
          {openMenu === "View" && (
            <ul className={styles.dropdown}>
              {menuItems.View.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${
            openMenu === "Special" ? styles.menuItemOpen : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuClick("Special");
          }}
        >
          Special
          {openMenu === "Special" && (
            <ul className={styles.dropdown}>
              {menuItems.Special.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
