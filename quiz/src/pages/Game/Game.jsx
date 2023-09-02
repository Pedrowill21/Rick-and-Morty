import styles from "./Game.module.css"
import React, { useEffect, useState } from 'react'
import {PackCharacter, PegarPersonagem} from "../../hooks/useCharacter"
import Form from "../../components/Form"



const Game = () => {

const [dados, setDados] = useState(null)

useEffect(()=>{

 async function puxar(){
   const Personagens =  await PackCharacter();
   console.log(Personagens)
   setDados(Personagens);

  }
  puxar()
  
}, [])


  return (
    <div className={styles.game}>
      <div className={styles.text}>
      <h1>Qual o nome deste personagem ??</h1>
      </div>
      { dados != null && (
        <div className="case" >
          <div>
          <img src={dados[0].image} className={styles.img}/>
          </div>
        
        <Form lista={dados}/>
      </div>
      
      )}
      
    </div>
  )
}

export default Game