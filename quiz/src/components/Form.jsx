import styles from "./Form.module.css"
import React, { useState } from 'react'

const Form = ({lista}) => {
    const [nome1, setNome1] = useState(lista[0].name)
    const [nome2, setNome2] = useState(lista[1].name)
    const [nome3, setNome3] = useState(lista[2].name)
    const [opcao,setEscolha] = useState("")

    function escolha(opcaoEscolhida){
        setEscolha(opcaoEscolhida)
    }
  
    function handleSubmit(){

    }


  return (
    <div>
        <form className={styles.form}>
            <div className={opcao === nome1 ? "inputEscolhido" : "input"} onClick={()=>escolha(nome1)}>{nome1}</div>
            <div className={opcao === nome2 ? "inputEscolhido" : "input"} onClick={()=>escolha(nome2)}>{nome2}</div>
            <div className={opcao === nome3 ? "inputEscolhido" : "input"} onClick={()=>escolha(nome3)}>{nome3}</div>
            
        </form>
    </div>
  )
}

export default Form