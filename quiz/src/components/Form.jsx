import styles from "./Form.module.css"
import React, { useState } from 'react';

const Form = ({ lista, controlePontuacao, gameOver }) => {
  const [opcao, setEscolha] = useState('');
  
  function escolha(opcaoEscolhida) {
    if (!gameOver) {
      setEscolha(opcaoEscolhida);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (opcao === lista[0].name) {
      controlePontuacao('ganhou');
    } else {
      controlePontuacao('perdeu');
    }
  }

  return (
    <form className={styles.form}>
      <div
        className={opcao === lista[0].name ? 'inputEscolhido' : 'input'}
        onClick={() => escolha(lista[0].name)}
      >
        {lista[0].name}
      </div>
      <div
        className={opcao === lista[1].name ? 'inputEscolhido' : 'input'}
        onClick={() => escolha(lista[1].name)}
      >
        {lista[1].name}
      </div>
      <div
        className={opcao === lista[2].name ? 'inputEscolhido' : 'input'}
        onClick={() => escolha(lista[2].name)}
      >
        {lista[2].name}
      </div>
      <div>
        <button className="btn" onClick={handleSubmit} disabled={gameOver}>
          Próximo
        </button>
      </div>
    </form>
  );
};

export default Form;
