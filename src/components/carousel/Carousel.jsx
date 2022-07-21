import React from "react";
import styles from "./carousel.module.css";
import firstImg from "../../img/firstImg.png";
import secondImg from "../../img/secondImg.png";
import thirdImg from "../../img/thirdImg.png";
import fourthImg from "../../img/fourthImg.png";
import fifthImg from "../../img/fifthImg.png";


const Carousel = () => {
    return (
        <div className={styles.picCtn}>
            <img src={firstImg} alt="" className={styles.pic}/>
            <img src={secondImg} alt="" className={styles.pic}/>
            <img src={thirdImg} alt="" className={styles.pic}/>
            <img src={fourthImg} alt="" className={styles.pic}/>
            <img src={fifthImg} alt="" className={styles.pic}/>
        </div>
    );
}


export default Carousel;