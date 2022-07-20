import React from "react";
import styles from "./header.module.css";
import imgHeader from "../../img/imgHeader.png";
import iconMenu from "../../img/iconMenu.png";
import iconSearch from "../../img/iconSearch.png";

const Header = () => {
  return (
    <>
      <header className={styles.topHeader}>
        <img alt="headImg" className={styles.headerImage} src={imgHeader}></img>
        <button className={styles.hamburgerMenu}>
          <img alt="menu" className={styles.menuIcon} src={iconMenu}></img>
        </button>
        <button className={styles.searchButton}>
            <img alt="search" className={styles.searchIcon} src={iconSearch}></img>
        </button>
      </header>
    </>
  );
};

export default Header;
