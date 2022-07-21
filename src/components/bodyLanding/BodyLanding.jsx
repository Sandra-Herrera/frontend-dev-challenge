import React from "react";
import styles from "./bodyLanding.module.css";
import imgMom from "../../img/imgMom.JPG"
import imgJob from "../../img/imgJob.JPG"
import imgBrain from "../../img/imgBrain.JPG"
import imgNum from "../../img/imgNum.JPG"
import imgHardman from "../../img/imgHardman.jpg"
import imgLove from "../../img/imgLove.JPG"
import imgPerson from "../../img/imgPerson.JPG"
import imgPhone from "../../img/imgPhone.JPG"
import Card from "../card/Card"

const BodyLanding = () => {

    const allArticles = [ //this information can be retrive by API in order to have a page 100% configurable
        {srcImg:imgMom,title:'¿Se puede olvidar la lengua materna?',description:'Hay circunstancias vitales excepcionales que pueden, en ocasiones, difuminar de nuestra mente ese idioma con el que nos criamos durante los primeros años de nuestra vida. Resulta imposible borrar por completo la lengua con las que nos criaron. Sin embargo, sí podemos perder fluidez, agilidad, vocabulario y evidenciar errores sintácticos y gramaticales.'},
        {srcImg:imgJob,title:'Lost 5 tipos de reconocmiento laboral',description:'1. Reconocimiento monetario.2. Reconocimiento verbal.3. Movilidad y ascensos.4. Tener en cuenta las ideas.5. Separar el esfuerzo del resultado.'},
        {srcImg:imgBrain,title:'Usos de la terapia electroconvulsiva',description:'La terapia electroconvulsiva se ha utilizado con éxito en el tratamiento de muchos trastornos graves que no respondían a los fármacos. A lo largo de los años se han efectuado numerosas mejoras en el procedimiento y se han establecido protocolos y recomendaciones de aplicación.'},
        {srcImg:imgNum,title:'¿Qué es la aritmofobia? sintomas, causas y tratamiento',description:'Las personas con aritmofobia experimentan angustia y pánico ante cualquier representación numérica. Se trata del miedo irracional y desproporcionado hacia todo lo que tenga que ver con números, sean naturales, primos, pares, impares, etc. Este temor irracional se desencadenaría ante la presencia de un objeto que relacionemos con una representación numérica, ya sea escribir una fecha o estudiar el Álgebra de Baldor.'},
        {srcImg:imgHardman,title:'Drayke Hardman, otra trágica víctima del bullying',description:'Si hay una tonalidad favorita en el mundo del arte es el azul. Wassily Kandinsky señalaba que es el color de la abstracción y la inmaterialidad. Yves Klein insistía en que el azul no tiene dimensiones, está más allá de toda dimensión, y Matisse comentaba que hay ciertos tipos de azul que se quedan en el interior de tu alma.'},
        {srcImg:imgLove,title:'9 lecciones para novatos en el amor',description:'El azul es el color favorito de la población. Lo que tal vez no sepamos es que este tipo de luz es beneficiosa para el cerebro: optimiza la memoria, la eficiencia cognitiva y el bienestar.'},
        {srcImg:imgPerson,title:'6 características de la personas interesadas',description:'El hipocampo es quizá la estructura cerebral que más peso tiene en nuestra memoria. Esta región, ubicada en el sistema límbico, es crucial para la formación, el almacenamiento y la recuperación de recuerdos. De manera más concreta, está relacionada con distintos aspectos de la memoria.'},
        {srcImg:imgPhone,title:'¿Cómo saber si le gusta a alguien por WhatsApp? 11 señales',description:'Si hay amor no tendrás dudas, porque cuando a las relaciones les pones amor te devuelven alegría, paz y sosiego. Y si estamos hablando de tus hijos, más aún. Puede que muchos se hayan sentido ofendidos por esto. Todos queremos a nuestros hijos, por supuesto, pero no es lo mismo amar a un hijo que criarlo con amor. '}
    ];

    const setDisplay = (startIndex,nElements,applyFlex = false) =>{
        let result=[];
        let maxArray = startIndex + nElements;
        if(maxArray > allArticles.length){
            maxArray = allArticles.length;
        }
        for (let index = startIndex; index < maxArray ; index++) {
            result.push(<Card key={index} srcImg={allArticles[index].srcImg} title={allArticles[index].title} description={allArticles[index].description} applyFlex={applyFlex}/>)
        }
        return result;
    };

    return (
        <main className={styles.mainLayout}>
            <section className={styles.leftSection}>anuncio a</section>

            <section className={styles.articleSection}>
                <section className={styles.topArticle}>{setDisplay(0,4)}</section>
                <section className={styles.middleArticle}>
                    <section className={styles.mainArticle}>{setDisplay(4,1)}</section>
                    <section className={styles.asideArticle}>{setDisplay(5,3,true)}</section>
                </section>
            </section>
            
            <section className={styles.rigthSection}>anuncio b</section>
        </main>
    );
}


export default BodyLanding;