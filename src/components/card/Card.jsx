import React, { useState } from "react";
import styles from "./card.module.css";
import Popup from "../popUp/PopUp"

const Card = (props) => {
    const [visible, setVisible] = useState(false);
    const callPopUp=()=>{
        setVisible(true);
    }
    return (
        <>
            <Popup setVisible={setVisible} visible={visible} srcImg={props.srcImg} title={props.title} description={props.description}/>
            <article className={props.applyFlex? styles.displayFlexRow:styles.displayFlexColumn} onClick={callPopUp}>
                <img src={props.srcImg} alt={props.title} className={props.applyFlex ? styles.imgDisplayFlexRow : styles.img}></img>
                <p>{props.title}</p>
            </article>
        </>
    );
}


export default Card;