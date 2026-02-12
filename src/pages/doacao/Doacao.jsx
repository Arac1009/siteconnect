import styles from "./Doacao.module.scss";
import InfoCard from "../../components/InfoCard/InfoCard";

import igFamilia from "../../assets/imagens/IgFamilia.png";
import pfEscola from "../../assets/imagens/PfEscola.png";
import conecta from "../../assets/imagens/Conecta.png";

const Doacao = () => {
  return (
    <section className={styles.doacao}>
      <h1>Doação</h1>

      <div className={styles.cards}>
        <InfoCard
          img={igFamilia}
          alt="Doação de alimentos"
          subtitulo="Instituto Grande Família"
          paragrafo1="Contribua com alimentos não perecíveis"
          paragrafo2="e ajude famílias em situação de vulnerabilidade."
          btn="Quero Doar"
        />

        <InfoCard
          img={pfEscola}
          alt="Doação de material escolar"
          subtitulo="Projeto Futuro na Escola"
          paragrafo1="Doe livros, cadernos, lápis,"
          paragrafo2="mochilas e canetas para jovens estudantes."
          btn="Quero Doar"
        />

        <InfoCard
          img={conecta}
          alt="Doação de tecnologia"
          subtitulo="Instituto Conecta Jovem"
          paragrafo1="Doe computadores, tablets ou celulares"
          paragrafo2="em bom estado para inclusão digital."
          btn="Quero Doar"
        />
      </div>
    </section>
  );
};

export default Doacao;


