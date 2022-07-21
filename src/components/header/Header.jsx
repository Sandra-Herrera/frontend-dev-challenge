import React from "react";
import styles from "./header.module.css";
import imgHeader from "../../img/imgHeader.png";
import iconSearch from "../../img/iconSearch.png";
import Menu from "../menu/Menu"

const Header = () => {
  

  return (
    <>
      <header className={styles.topHeader}>
        <img alt="headImg" className={styles.headerImage} src={imgHeader}></img>
        <button className={styles.hamburgerMenu}>
          <Menu/>
        </button>
        <button className={styles.searchButton}>
            <img alt="search" className={styles.searchIcon} src={iconSearch}></img>
        </button>
      </header>
    </>
  );
};

export default Header;
