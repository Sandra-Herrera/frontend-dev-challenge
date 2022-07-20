import React from "react";
import styles from "./footer.module.css";
import mcontigoImg from "../../img/mcontigoImg.png";

const Footer = () => {
  return (
    <div className={styles.designFooter}>
      <section className={styles.containerLogoText}>
        <section className={styles.areaMcontigo}>
          <img
            alt="imgMcontigo"
            className={styles.imgMcontigo}
            src={mcontigoImg}
          ></img>
        </section>
        <p className={styles.areaTextFooter}>
          La Mente es Maravillosa is a property of Grupo MContigo 
          2012-2020. All
          rights reserved. Los contenidos de esta publicación se redactan solo
          con fines informativos. En ningún momento pueden servir para facilitar
          diagnósticos o sustituir la labor de un profesional. Le recomendamos
          que contacte con su especialista de confianza.
        </p>
      </section>

      <section className={styles.bottomButtonsContainer}>
        <button className={styles.bottomButtons}></button>
        <button className={styles.bottomButtons}></button>
        <button className={styles.bottomButtons}></button>
        <button className={styles.bottomButtons}></button>
      </section>
    </div>
  );
}

export default Footer;