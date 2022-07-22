import React, { useState } from "react";
import styles from "./menu.module.css";
import iconMenu from "../../img/iconMenu.png";
import iconClose from "../../img/iconClose.png";
import iconArrow from "../../img/iconArrow.png";
import { useNavigate, Link } from "react-router-dom";



const Menu = () => {
    const navigate = useNavigate();
    const goHome = () => {
      navigate('/');
    }

    const menuOptions=[
      {name:'Embarazo',subOptions:[{path:'/faq',opt:'Quiero ser mamá'},{path:'/faq',opt:'Voy a ser mamá'},{path:'/faq',opt:'Parto'}]},
      {name:'Educacion',subOptions:[{path:'/faq',opt:'Aprende a ser mamá'},{path:'/faq',opt:'Educación para bebés'},{path:'/faq',opt:'Educación para niños'}]},
    ]
    
    const[displayMenu, setDisplayMenu] = useState(false);
  
    const toggleDisplayMenu =()=>{
        setDisplayMenu(!displayMenu);
    }
    
    return (
      <>
        {displayMenu ? (
          <>
            <img
              alt="menu"
              className={styles.menuIcon}
              src={iconClose}
              onClick={toggleDisplayMenu}
            ></img>
            <div className={styles.container}>
            <section className={styles.subMenu}>
                <h3>Inicio</h3>
                <hr />
                <section className={styles.flexColumn} onClick={goHome}>
                  <div className={styles.wrapperOption}>
                    <span>Pagina principal</span>
                    <img src={iconArrow} alt="-->"></img>
                  </div>
                </section>
              </section>
              <section className={styles.subMenu}>
                {
                  menuOptions.map((option,index)=>
                    <div key={index}>
                      <h3>{option.name}</h3>
                      <hr />
                      <section className={styles.flexColumn}>
                        {option.subOptions.map((subOption,index)=>
                          <div key={`subOpt${index}`}>
                          <Link to={subOption.path}
                              state={{opt:`${subOption.opt}`}}
                             className={styles.wrapperOption} >
                            <span>{subOption.opt}</span>
                            <img src={iconArrow} alt="-->"></img>
                          </Link>
                          </div>
                        )}
                      </section>
                    </div>
                  )
                }
              </section>
            </div>
          </>
        ) : (
          <img
            alt="menu"
            className={styles.menuIcon}
            src={iconMenu}
            onClick={toggleDisplayMenu}
          ></img>
        )}
      </>
    );
}


export default Menu;