import React from "react";
import styles from "./carouselTestimony.module.css";
import icQuotation from '../../img/iconQuotationMarks.png';


const CarouselTestimony = () => {
    const allTestimonies=[
        {author:'Test Name', review:'Lorem ipsum dolor sit amet.'},
        {author:'User 10', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },
        {author:'Maria', review:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
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
                                                <p>{element.review}</p>
                                                <p>~{element.author}~</p>
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
                                            <a href={`#carousel__slide${index}`}
                                                className={styles.carousel__navigation_button}>Go to slide {index+1}</a>
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
