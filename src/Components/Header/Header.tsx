import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import useMedia from "../../Hooks/useMedia";
import React from "react";

const Header = () => {
  const mobile = useMedia("(max-width: 700px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          {mobile && (
            <button
              className={`${styles.button} ${
                mobileMenu && styles.mobileButtonActive
              }`}
              aria-expanded="false"
              aria-controls="menu"
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          )}
          <Link className={styles.logo} to="/" aria-label="Roupas - Home">
            <img src={Logo} alt="logotipo" />
          </Link>
          <ul
            className={`${mobile ? styles.listaMobile : styles.lista} ${
              mobileMenu && styles.listaMobileActive
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="">Sobre</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Contatos</Link>
            </li>
          </ul>
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
