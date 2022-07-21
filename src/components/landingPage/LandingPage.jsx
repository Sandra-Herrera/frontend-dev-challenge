import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./landingPage.module.css";
import BodyLanding from "../bodyLanding/BodyLanding"
import Carousel from "../carousel/Carousel"
const LandingPage = () => {


    return(
        <>
            <Header/>
            <Carousel/>
            <BodyLanding/>
            <Footer/>
        </>
    );
}

export default LandingPage;