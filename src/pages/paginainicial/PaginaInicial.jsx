import s from "./PaginaInicial.module.scss"

const PaginaInicial = () => {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.text}>
          <h1>Projetos Sociais que transformam</h1>
          <p>
            Conectamos sua empresa com projetos sociais impactantes. 
            Juntos, criamos mudanças reais na comunidade.
          </p>
          <button className={s.cta}>Cadastrar Empresa</button>
        </div>
        <div className={s.image}>
          <img src="/assets/banner.png" alt="Mãos segurando globo com figuras humanas" />
        </div>
      </section>

      <section className={s.stats}>
        <div>
          <h2>500+</h2>
          <p>Empresas Voluntárias</p>
        </div>
        <div>
          <h2>1.2K+</h2>
          <p>Projetos Realizados</p>
        </div>
        <div>
          <h2>50K+</h2>
          <p>Vidas Impactadas</p>
        </div>
      </section>
    </main>
  )
}

export default PaginaInicial
