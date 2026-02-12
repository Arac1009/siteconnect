import styles from "./EventosEP.module.scss";
import InfoCard from "../../components/InfoCard/InfoCard";
import Jovens from "../../assets/imagens/Jovens.png";
import TQtransforma from "../../assets/imagens/TQtransforma.png";
import Emprego from "../../assets/imagens/Emprego.png";

const Eventos = () => {
  return (
    <section className={styles.eventos}>
      <h1>Eventos & Palestras</h1>

      <div className={styles.cards}>
        <InfoCard
          img={Jovens}
          alt="Empoderando Jovens para o Futuro"
          subtitulo="Empoderando Jovens para o Futuro"
          paragrafo1="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
          paragrafo2="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
          btn="Quero Participar"
        />

        <InfoCard
          img={TQtransforma}
          alt="Tecnologia que Transforma"
          subtitulo="Tecnologia que Transforma"
          paragrafo1="Atividade: Workshop de introdução à programação e inovação digital."
          paragrafo2="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          btn="Quero Participar"
        />

        <InfoCard
          img={Emprego}
          alt="Carreira e Primeiro Emprego"
          subtitulo="Carreira e Primeiro Emprego"
          paragrafo1="Atividade: Palestra com profissionais de RH sobre currículo, entrevistas e postura no mercado."
          paragrafo2="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          btn="Quero Participar"
        />
      </div>
    </section>
  );
};

export default Eventos;
