import React from "react";
import styles from "./footer.module.css";
import mcontigoImg from "../../img/mcontigoImg.png";
import lineHr from "../../img/lineHr.png";

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
          La Mente es Maravillosa is a property of Grupo MContigo <br/>
          2012-2020. All rights reserved. <br/>
          Los contenidos de esta publicación se redactan solo con fines informativos. En <br/>
          ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de <br/>
          un profesional. Le recomendamos que contacte con su especialista de confianza. <br/>
        </p>
      </section>
      <img alt="hr line"
            className={styles.imgHr}
            src={lineHr}>
      </img>

      <section className={styles.bottomButtonsContainer}>
        <button className={styles.bottomButtons}>Política de Cookies</button>
        <button className={styles.bottomButtons}>Política de Privacidad</button>
        <button className={styles.bottomButtons}>Términos y condiciones de uso</button>
        <button className={styles.bottomButtons}>Cláusula Informativa de Consentimiento</button>
      </section>
    </div>
  );
}

export default Footer;