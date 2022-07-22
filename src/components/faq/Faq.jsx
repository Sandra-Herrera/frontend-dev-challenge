import React from "react";
import CarouselTestimony from "../carouselTestimony/CarouselTestimony"
import styles from "./faq.module.css"
import Img1 from "../../img/imgBaby.JPG"
import Img2 from "../../img/imgEducation.JPG"
import { useLocation } from "react-router-dom";


const Faq = (props) => {
    const location = useLocation();
    const opt = (location && location.state && location.state.opt) ? location.state.opt: 'Quiero ser mamá';
    
    const topics=[
        {img:Img1,content:[
            {active:false,title:'Quiero ser mamá',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'},
            {active:false,title:'Voy a ser mamá',description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'},
            {active:false,title:'Parto',description:'Lorem ipsum is placeholder text commonly used in the graphic, print.'}
        ]},
        {img:Img2,content:[
            {active:false,title:'Aprende a ser mamá',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'},
            {active:false,title:'Educación para bebés',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '},
            {active:false,title:'Educación para niños',description:'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.'}
        ]}
    ];
    
    const toggle=(cont)=>{
        cont.active = !cont.active;

    }

    const renderSection = () =>{
        let topic=topics.find((topic)=>topic.content.find((item)=>item.title===opt));
        return <>
            <img src={topic?.img} className={styles.img} alt="" />
            {topic.content.map((cont)=><div>
                <button type="button" className={styles.collapsible} onclick={toggle(cont)}>{cont.title}</button>
                <div className={cont.active?styles.unHide:styles.unHide}>
                    <p>{cont.description}</p>
                </div>
            </div>)}
        </>
    }
    return(
        <>
            <section className={styles.gridContainer}>
                <section className={styles.ls}></section>
                <section className={styles.cs}>
                    {renderSection()}
                </section>
                <section className={styles.rs}>
                    <CarouselTestimony/>
                </section>
            </section>
        </>
    );
}

export default Faq;