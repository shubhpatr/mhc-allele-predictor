import {React,useEffect,useState,useContext} from 'react'
import styles from '../styles/Container.module.css'
import {perc,validate,formulate} from '../helpers/help'
import { Context } from "./store/store";
import Router from 'next/router';

function Form() {
    const [percentage,setP] = useState([]);
    const [body, setBody] = useState({"perc":"4"});
    const [loading,setLoading] = useState(false);
    const [state, dispatch] = useContext(Context);


    function handleData({ target }) {
      if(target.name == 'sequence') {setBody((prev) => ({ ...prev, [target.name]: formulate(target.value) }));}
      else {setBody((prev) => ({ ...prev, [target.name]: target.value }));}
      
      
    }

    async function handleSubmit(e) {
      e.preventDefault();
      if(validate(body['sequence']) == 0){
        alert("Invalid Input");
        return;
      }
      setLoading(true);
      let res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),}
      );
      const json = await res.json();
      if (json['success']){
        dispatch({payload:json['data']});
      }
      else{
        alert('Server Error');
      }
    }
    useEffect(() => {
       setP(perc());
    }, [])

    
    return ( 
        <div className={styles.introduction}>
            
        <div className={styles.container}>
        <div style={{marginBottom:"40px",display:"flex"}}>
        <p style={{textAlign:"center",width:"100%" ,color:"rgba(214, 182, 121, 0.884)"}}>
        <div className={styles.tooltip}>Input DNA Sequence
  <span className={styles.tooltiptext}>Paste the DNA sequence and select a threshold limit. It will display corresponding top % of binding sites. Default is 4%.</span>
</div> 
            </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
      
      <textarea
        name="sequence"
        placeholder="Paste Sequence"
        style={{marginBottom:"20px",width:"95%",height:"150px",maxWidth:"100%",maxHeight:"200px"}}
        required
        onChange={handleData}
      />
      {/* <input type="file" name="file"  />
      <input
        name="bot-field"
        type="text"
        style={{ display: "none" }}
      /> */}
      <select style={{textAlign:"center",width: "-moz-fit-content",marginBottom:"40px"}} name="perc" id="perc" onChange={handleData}>
      <option  value=""> Select Threshold</option>
								{percentage.map((value) => (
									<option  value={value}>
										{value}{"%"}
									</option>
								))}

  
</select>
      <button className={styles.button} type="submit" onSubmit={handleSubmit}>Calculate</button>
    </form>
    
    </div>
        </div>
    )
}

export default Form
