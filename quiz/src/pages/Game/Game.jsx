import React, { useEffect, useState } from 'react';
import { PackCharacter } from '../../hooks/useCharacter';
import Form from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import styles from "./Game.module.css"

const Game = () => {
  const [dados, setDados] = useState(null);
  const [pontuacao, setPontuacao] = useState(500);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  function controlePontuacao(resultado) {
    if (resultado === 'ganhou') {
      setPontuacao(pontuacao + 100);
    } else {
      setPontuacao(pontuacao - 100);
    }

    if (pontuacao === 0) {
      setGameOver(true);
    }
  }

  useEffect(() => {
    async function puxar() {
      if (pontuacao === 0) {
        setGameOver(true);
        // Pode fazer a navegação aqui ou em outro lugar, dependendo de como você deseja lidar com o Game Over.
        // navigate("/gameOver");
      }

      const Personagens = await PackCharacter();
      setDados(Personagens);
    }
    puxar();
  }, [pontuacao]);

  return (
    <div className={styles.game}>
      <div className={styles.pontuacao}>Pontuação: {pontuacao}</div>
      <div className={styles.text}>
        <h1>Qual o nome deste personagem ??</h1>
      </div>
      {dados != null && !gameOver && (
        <div className="case">
          <div>
            <img src={dados[0].image} className={styles.img} />
          </div>
          <Form lista={dados} controlePontuacao={controlePontuacao} />
        </div>
      )}
      {gameOver && (
        // Aqui, você pode exibir uma mensagem de Game Over ou outro componente, por exemplo:
        <div className={styles.gameOver}>
          <h2>Game Over!</h2>
          <p>Sua pontuação chegou a 0. Você perdeu o jogo.</p>
          {/* Adicione um botão ou link para reiniciar o jogo ou ir para a tela inicial, se desejar */}
          <button onClick={() => navigate('/gameOver')}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default Game;
