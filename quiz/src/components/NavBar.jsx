import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <nav className={styles.navBar}>
    <ul className={styles.link_list}>
      <li>
          <NavLink className={styles.link} to="/">Home</NavLink>
      </li>
      <li>
          <NavLink className={styles.link} to="/game">Game</NavLink>
      </li>
      <li>
          <NavLink className={styles.link} to="/game">Sobre</NavLink>
      </li>
      <li>
          <NavLink className={styles.link} to="/game">Contato</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default NavBar