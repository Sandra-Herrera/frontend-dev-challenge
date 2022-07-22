import React, { useState } from "react";
import styles from "./subscribeNews.module.css";
import imgComputer from "../../img/imgComputer.JPG"
import Popup from "../popUp/PopUp"
import iconCheck from "../../img/iconCheck.png"

const SubscribeNews = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const register=()=>{
        setMessage(`¡se ha registrado ${email} de manera existosa!`);
        setVisible(true);
    }

    const changeEmail=(e)=>{
        setEmail(e.target.value);
    }
    return (
        <div className={styles.mainContainer}>
            <Popup setVisible={setVisible} visible={visible} srcImg={iconCheck}  description={message}></Popup>
            <section className={styles.container}>
                <img src={imgComputer} alt="img computer" className={styles.img}></img>
                <div className={styles.emailContainer}>
                    <span>Newsletter</span>
                    <input type="text" placeholder="Inserta tu correo" className={styles.input} onChange={changeEmail}></input>
                </div>
                <button type="button" className={styles.btn} onClick={register}>Subscribirse</button>
            </section>
        </div>
    );
}


export default SubscribeNews;