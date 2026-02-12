import s from "./Mentoria.module.scss"

const mentorias = [
  {
    titulo: "Mentoria de Carreira e Emprego",
    descricao: "Orientação sobre currículos, entrevistas e primeiros passos no mercado de trabalho.",
    imagem: "/assets/imagens/carreira.png",
  },
  {
    titulo: "Compartilhe Experiência",
    descricao: "Profissionais guiando jovens e iniciantes em suas áreas.",
    imagem: "/assets/imagens/experiencia.png",
  },
  {
    titulo: "Acompanhamento",
    descricao: "Participe como guia em jornadas de aprendizado e desenvolvimento.",
    imagem: "/assets/imagens/acompanhamento.png",
  }
]

const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Mentoria</h1>

      <section className={s.cards}>
        {mentorias.map((m, i) => (
          <div key={i} className={s.card}>
            <img src={m.imagem} alt={m.titulo} />
            <h2>{m.titulo}</h2>
            <p>{m.descricao}</p>
            <button className={s.cta}>Quero participar</button>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Mentoria