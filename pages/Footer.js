import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <div className={styles.foot}>
          <p style={{textAlign:"initial",marginLeft:"10px",width:"100%"}}>Contributor <a target="_blank" href="http://linkedin.com/in/shubhammohapatra"><u>Shubham</u></a></p>
          <p style={{textAlign:"end",width:"100%",marginRight:"10px",fontSize:"32px"}}><a target="_blank" href="http://github.com/shubhpatr"><AiFillGithub/></a></p>
        </div>
    )
}

export default Footer
