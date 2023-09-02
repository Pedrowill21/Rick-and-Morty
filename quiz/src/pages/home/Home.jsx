
import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"
const Home = () => {
  return(
       <div className={styles.home}>
      <div className={styles.text}>
      <h1>Você é um verdadeiro fã de <span className="destaque"> Rick and Morty</span> ??</h1>
        <h2>"Entre na loucura multiversal desta série animada icônica enquanto testamos seus conhecimentos sobre os personagens, os mundos bizarros que eles visitam e as aventuras insanas que enfrentam. Desde o cientista maluco Rick Sanchez até o seu neto Morty Smith, este quiz desafiará até mesmo os fãs mais dedicados. Será que você é digno de um lugar na equipe do Rick? Descubra agora e prove que você é um verdadeiro expert no universo de Rick and Morty!"</h2>
      </div>
        <div className={styles.containerImg}>
          <img src="../../public/morty.png" className={styles.imgMorty} alt="morty" />
            <img className={styles.imgRyck} src="../../public/rick.png" alt="Rick" />
        
        </div>
        <div className={styles.containerButton}>
          <NavLink className="btn" to="/game">Jogar</NavLink>
        </div>
       </div>
  )
}
export default Home