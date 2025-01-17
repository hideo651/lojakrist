import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import useMedia from "../../Hooks/useMedia";
import React from "react";
import { useUi } from "../../UiContext";
import { FaRegUser } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { LuLogOut } from "react-icons/lu";

const Header = () => {
  const { data, userLogout } = useUi();
  const mobile = useMedia("(max-width: 700px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const handleClick = () => {
    userLogout();
  };

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
          {data.name ? (
            <div className={styles.listUser}>
              {pathname === "/conta" ? (
                <button className={styles.btnLogout} onClick={handleClick}>
                  <LuLogOut size={25} />
                  Sair
                </button>
              ) : (
                <div>
                  <ButtonCart />
                  <Link to="/conta">
                    <FaRegUser size={20} />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link className={styles.login} to="/login">
              Login / Criar
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
