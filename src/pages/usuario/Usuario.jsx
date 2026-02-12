import s from "./usuario.module.scss"
import { MdOutlinePlace } from "react-icons/md";

const Usuario = () => {

  return (
    <main className={s.main}>
      <section>
        <img src="meuGitHub" alt="imagem do perfil do usuário" />
        <div>
          <h1>Alexis Alvarez</h1>
          <h2></h2>
          <p></p>
          <ul>
            <li><MdOutlinePlace />São Paulo -SP</li>
            <li>alexalvarez2709@gmail.com</li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Usuario
