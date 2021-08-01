import React from 'react'
import styles from '../styles/Home.module.css'
import { FaQuestionCircle } from 'react-icons/fa';

function Header() {
    return (
        <div className={styles.header}>
            <div style={{display:"flex"}}>
            <p style={{textAlign:"initial",width:"100%",marginLeft:"20px"}}>
             <a href="/">MHC-CLASS 1 ALLELE PREDICTOR</a>
            </p>
            <p style={{textAlign:"end",width:"100%",marginRight:"20px"}}>
                <a href="https://en.wikipedia.org/wiki/MHC_class_I" target="_blank"><FaQuestionCircle/>   </a>
                
            </p>
            </div>
        </div>
    )
}

export default Header
