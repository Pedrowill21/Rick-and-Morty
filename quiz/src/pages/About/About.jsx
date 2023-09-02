import styles from "./About.module.css"
import React from 'react'

const About = () => {
  return (
    <div className={styles.about}>
      
      <div className={styles.text}>
      <h3>
             Mergulhe de cabeça no excêntrico universo de "Rick and Morty" em um jogo de adivinhação único e viciante! "Adivinhe o Nome dos Personagens de Rick and Morty" é uma experiência de jogo emocionante e desafiadora, desenvolvida com JavaScript, React e JSX, que testará seu conhecimento sobre os personagens mais estranhos e engraçados do multiverso.
            Neste jogo, você será apresentado a imagens enigmáticas dos personagens mais icônicos da série, desde o genial, porém descuidado, Rick, até o jovem e inquieto Morty. Sua missão é decifrar quem são esses personagens, reconhecendo-os a partir das imagens fornecidas. Use sua observação afiada e sua paixão por "Rick and Morty" para acertar o nome de cada personagem antes que o tempo se esgote.Recursos do jogo:
            Uma extensa galeria de personagens hilários da série "Rick and Morty".
            Gráficos cativantes e imagens autênticas para uma experiência imersiva.
            Contagem regressiva para intensificar o desafio.
            Níveis progressivamente mais desafiadores à medida que você avança.
            Desafie a si mesmo e seus amigos para ver quem é o verdadeiro especialista em personagens de "Rick and Morty"! Com "Adivinhe o Nome dos Personagens de Rick and Morty", você pode se perder no caos interdimensional enquanto testa suas habilidades e conhecimento. Prepare-se para uma aventura cheia de diversão, aprendizado e caos. É hora de adivinhar o nome dos personagens e provar que você é o verdadeiro conhecedor do multiverso de "Rick and Morty"!
            Então, está preparado para decifrar o enigma e se tornar o mestre das adivinhações de personagens de "Rick and Morty"? Jogue agora e mostre que você é o cientista mais maluco da adivinhação!
        </h3>
      </div>
      <div className={styles.case}>
        <img src="../../public/morty.png" className={styles.img}/>
      </div>

    </div>
  )
}

export default About