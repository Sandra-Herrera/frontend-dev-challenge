import React from "react";
import styles from "./popUp.module.css";


export function Popup(props) {
  
  const onClickCloseModal=()=>{
    props.setVisible(false);
  };
  return props.visible ? (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClickCloseModal}>
            &times;
          </span>
          <article>
            <img src={props.srcImg} alt={props.title} className={styles.img}></img>
            <p>{props.title}</p>
            <p>{props.description}</p>
          </article>
        </div>
      </div>
    </>
  ) : null;
}

export default Popup;