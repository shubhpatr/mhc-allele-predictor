import React from 'react'
import { Context } from "./store/store";
import {useContext} from 'react';
import styles from '../styles/Home.module.css';



function Result() {
    const [state, dispatch] = useContext(Context);

    function Allele({data,index}) {
        return(
        <div style={{display:"flex",maxWidth:"100%"}}> 
        <p style={{marginLeft:"20px",marginRight:"10px",color:"orange",fontSize:"1vw"}}>{index+1}. {data} </p>
        {state && state.data[data].map((value) => (
                                    <div style={{maxWidth:"30%"}} >
                                    
									<p style={{color:"white",fontSize:"1vw",marginRight:"5px"}}>
										({value['peptide']},{value['value']})
									</p>
                                    </div>
								))}
        </div>)
    }

    return (
        <div> 
            <h1 className={styles.intro3}>Result</h1>
            <p style={{color:"rgba(214, 182, 121, 0.884)",textAlign:"center"}}>Format:- (Peptide, Score) </p>
            {state && Object.keys(state.data).map((value,index) => (
									<Allele data={value} index={index}/>
								))}
        
        </div>
    )
}

export default Result;
