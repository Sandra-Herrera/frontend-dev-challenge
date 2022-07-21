import React, { useState } from "react";
import styles from "./menu.module.css";
import iconMenu from "../../img/iconMenu.png";
import iconClose from "../../img/iconClose.png";
import iconArrow from "../../img/iconArrow.png";



const Menu = () => {
    const[displayMenu, setDisplayMenu] = useState(false);
  
    const toggleDisplayMenu =()=>{
        setDisplayMenu(!displayMenu);
    }
    
    return (
      <>
        {displayMenu ? (
          <>
            <img
              alt="menu"
              className={styles.menuIcon}
              src={iconClose}
              onClick={toggleDisplayMenu}
            ></img>
            <div className={styles.container}>
              <section className={styles.subMenu}>
                <h3>Embarazo</h3>
                <hr />
                <section className={styles.flexColumn}>
                  <div className={styles.wrapperOption}>
                    <span>Quiero ser mamá</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                  <div className={styles.wrapperOption}>
                    <span>Voy a ser mamá</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                  <div className={styles.wrapperOption}>
                    <span>Parto</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                </section>
              </section>
              <section className={styles.subMenu}>
                <h3>Educacion</h3>
                <hr />
                <section className={styles.flexColumn}>
                  <div className={styles.wrapperOption}>
                    <span>Aprende a ser mamá</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                  <div className={styles.wrapperOption}>
                    <span>Educación para bebés</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                  <div className={styles.wrapperOption}>
                    <span>Educación para niños</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                </section>
              </section>
            </div>
          </>
        ) : (
          <img
            alt="menu"
            className={styles.menuIcon}
            src={iconMenu}
            onClick={toggleDisplayMenu}
          ></img>
        )}
      </>
    );
}


export default Menu;