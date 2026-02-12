import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./globalStyles.scss"

import PaginaInicial from "./pages/paginainicial/PaginaInicial"
import EventosEP from "./pages/eventosEP/EventosEP"
import Usuario from "./pages/usuario/Usuario"
import Doacao from "./pages/doacao/Doacao"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Mentoria from "./pages/mentoria/Mentoria"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"



function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/eventos-ep" element={<EventosEP />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
