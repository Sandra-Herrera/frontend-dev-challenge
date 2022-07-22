import React from "react";
import styles from "./carouselTestimony.module.css";
import icQuotation from '../../img/iconQuotationMarks.png';


const CarouselTestimony = () => {
    const allTestimonies=[
        {author:'Ana Duarte', review:'Es muy bueno saber que existen sitios como este, nos ayudan a conocer distintos conceptos los cuales son de gran utilidad, quiero agradecer a los expertos que comparten sus conocimientos en este sitio para apoyarnos.'},
        {author:'Maria Montessori', review:'Me gustaría agradecer al sitio, me ayudo de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'  },
        {author:'Ricardo González', review:'Es un sitio de gran utilidad, recibí una excelente atención me ayudo bastante con mis dudas.' },
        {author:'Other Name',review:'Lorem ipsum was popularized in the 1960s with Letraset dry-transfer sheets, and later entered the digital world via Aldus PageMaker'},
    ];
    return (
        <>
            <div className={styles.gridContainter}>
                <section className={styles.lSide}></section>
                <section className={styles.cSide}>
                    <div className={styles.cImage}>
                        <img src={icQuotation} className={styles.imgQuotation} alt="" />
                    </div>
                    <section className={styles.carousel}>
                        <ol className={styles.carousel__viewport}>
                            {
                                allTestimonies.map((element,index)=>
                                    <li key={index} id={`carousel__slide${index}`}
                                        tabIndex="0"
                                        className={styles.carousel__slide}>
                                        <div className={styles.carousel__snapper}>
                                            <section className={styles.review}>
                                                <p className={styles.reviewFont}>{element.review}</p>
                                                <p className={styles.reviewFont}>~{element.author}~</p>
                                            </section>
                                        </div>
                                    </li>
                                )
                            }
                        </ol>
                        <aside className={styles.carousel__navigation}>
                            <ol className={styles.carousel__navigation_list}>
                                {
                                    allTestimonies.map((element,index)=>
                                        <li key={`bottom${index}`} className={styles.carousel__navigation_item}>
                                            
                                        </li>
                                    )
                                }
                            </ol>
                        </aside>
                    </section>
                </section>
                <section className={styles.rSide}></section>
            </div>
        </>
    );
}


export default CarouselTestimony;
