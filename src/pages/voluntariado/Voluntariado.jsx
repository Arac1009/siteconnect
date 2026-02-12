import InfoCard from "../../components/InfoCard/InfoCard";
import s from "./Voluntariado.module.scss";

import reciclagem from "../../assets/imagens/reciclagem.png";
import tecnologia from "../../assets/imagens/tecnologia.png";
import esporte from "../../assets/imagens/esporte.png";

const Voluntariado = () => {
  return (
    <section className={s.voluntariado}>
      <h1>Voluntariado</h1>

      <div className={s.cards}>
        <InfoCard
          img={reciclagem}
          alt="Mutirão de reciclagem"
          subtitulo="Mutirão de reciclagem"
          paragrafo1="Coletar materiais recicláveis e orientar sobre"
          paragrafo2="descarte consciente."
          btn="Quero participar"
        />

        <InfoCard
          img={tecnologia}
          alt="Aulas de Tecnologia"
          subtitulo="Aulas de Tecnologia"
          paragrafo1="Ensinar noções básicas de informática,"
          paragrafo2="internet segura e programação."
          btn="Quero participar"
        />

        <InfoCard
          img={esporte}
          alt="Esporte e Inclusão"
          subtitulo="Esporte e Inclusão"
          paragrafo1="Organizar treinos e jogos que incentivem"
          paragrafo2="a participação de jovens."
          btn="Quero participar"
        />
      </div>
    </section>
  );
};

export default Voluntariado;
