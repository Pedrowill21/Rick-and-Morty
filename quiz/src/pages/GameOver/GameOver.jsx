import styles from "./GameOver.module.css"
import { useNavigate } from "react-router-dom"

const GameOver = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.gameOver}>
      <div className={styles.text}>
      <h2>"Oh, você perdeu o jogo, hein? Uau, que surpresa! Deve ter sido um desafio incrível falhar tão espetacularmente. Quem mais poderia ter feito isso tão bem como você, né?
        Não é todo dia que alguém se destaca tanto na arte da derrota. Parabéns, você é um verdadeiro campeão... de perder. Espero que tenha aproveitado cada momento da sua queda épica.
        Bom, melhor sorte da próxima vez, se você conseguir reunir alguma sorte. E se não, bem, você já sabe como fazer isso parecer impressionante.
        Até a próxima, derrotado de elite!"</h2>
        <span>-Rick Sanchez.</span>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"10px 0"}}>
          <img className={styles.img} src="../../public/rick-tela-final.png" alt="" />
          <button className="btn" onClick={()=> navigate("/") }>de novo</button>
          
        </div>
      </div>
      
    </div>

  )
}

export default GameOver