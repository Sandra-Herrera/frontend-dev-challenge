import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./landingPage.module.css";
import BodyLanding from "../bodyLanding/BodyLanding"
import Carousel from "../carousel/Carousel"
import CarouselTestimony from "../carouselTestimony/CarouselTestimony"
import Subscribe from "../subscribeNews/SubscribeNews"
const LandingPage = () => {


    return(
        <>
            <Header/>
            <Carousel/>
            <BodyLanding/>
            <CarouselTestimony/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default LandingPage;