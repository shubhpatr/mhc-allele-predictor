import {React,useContext} from 'react'
import styles from '../styles/Home.module.css'

function introduction() {
    return (
        <div className={styles.introduction}>
            <h1 className={styles.intro2}>MHC Class 1 Allele Binding Sites Prediction</h1>
            <p style={{maxWidth:"570px",fontSize: "1rem"}}>
    This is a website for identifying the MHC Class-I binding regions in antigens. 
    It implements matrices for 47 MHC Class-I alleles, proteasomal and immunoproteasomal models. 
    The main aim of this server is to help users in identifying the promiscuous regions. 
    For the list of matrices please refer the <a href="https://webs.iiitd.edu.in/raghava/propred1/matrices/matrix.html" target="_blank"><u>link. </u><br></br></a>
    Please also find Reference website and Research Paper <a href="https://pubmed.ncbi.nlm.nih.gov/12761064/" target="_blank"><u>link. </u></a>
    </p>
        </div>
    )
}

export default introduction
