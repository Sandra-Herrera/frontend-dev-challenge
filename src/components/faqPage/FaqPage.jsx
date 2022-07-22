import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Faq from "../faq/Faq"
import Carousel from "../carousel/Carousel"
import CarouselTestimony from "../carouselTestimony/CarouselTestimony"
import Subscribe from "../subscribeNews/SubscribeNews"



const FaqPage = () => {
    return(
        <>
            <Header/>
            <Carousel/>
            <Faq/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default FaqPage;