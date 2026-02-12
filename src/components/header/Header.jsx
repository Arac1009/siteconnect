import s from "./header.module.scss";
import { NavLink } from "react-router-dom";
import logotipo from "../../assets/icones/logo.png";
import { useEffect, useState } from "react";

const links = [
  { to: "/doacao", label: "Doação" },
  { to: "/voluntariado", label: "Voluntariado" },
  { to: "/mentoria", label: "Mentoria" },
  { to: "/eventos-ep", label: "Eventos" },
];

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={s.header}>
        <NavLink to="/" end>
          <img
            className={s.imgLogo}
            src={logotipo}
            alt="Logo do projeto Connect"
          />
        </NavLink>

        {!isMobile && (
          <nav className={s.nav}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? s.activeLink : s.link
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        <button
          className={s.userButton}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu do usuário"
        >
          <img
            className={s.imgUser}
            src="https://avatars.githubusercontent.com/u/145626752?v=4"
            alt="Foto de perfil do usuário"
          />
        </button>
      </header>

      <nav className={menuAberto ? s.navUser : s.closedNavUser}>
        <NavLink to="/usuario" onClick={() => setMenuAberto(false)}>
          Alexis Alvarez
        </NavLink>

        <NavLink onClick={() => setMenuAberto(false)}>
          Meu voluntariado
        </NavLink>

        <NavLink onClick={() => setMenuAberto(false)}>
          Configurações da conta
        </NavLink>

        {isMobile && (
          <div>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuAberto(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

        <NavLink onClick={() => setMenuAberto(false)}>
          Sair
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
