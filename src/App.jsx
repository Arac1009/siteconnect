import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./globalStyles.scss"

// Páginas
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial"
import EventosEP from "./pages/EventosEP/EventosEP"
import Usuario from "./pages/Usuario/Usuario"
import Doacao from "./pages/Doacao/Doacao"
import Voluntariado from "./pages/Voluntariado/Voluntariado"
import Mentoria from "./pages/Mentoria/Mentoria"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><PaginaInicial /></Layout>} />
        <Route path="/doacao" element={<Layout><Doacao /></Layout>} />
        <Route path="/voluntariado" element={<Layout><Voluntariado /></Layout>} />
        <Route path="/usuario" element={<Layout><Usuario /></Layout>} />
        <Route path="/mentoria" element={<Layout><Mentoria /></Layout>} />
        <Route path="/eventos-ep" element={<Layout><EventosEP /></Layout>} />
        
        <Route path="*" element={<Layout><h1>Página não encontrada</h1></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
