import styles from "./Footer.module.css";
import Logo from "../../assets/logo.svg?react";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerDiv} container`}>
        <div className={styles.footerInfo}>
          <Logo />
          <p>(11)999-9999-99</p>
          <p>krist@mail.com</p>
          <p>Rua do Brasil 000 - SP</p>
        </div>
        <div className={styles.footerInfo}>
          <h3>Serviços</h3>
          <p>Sobre</p>
          <p>Informações de delivery</p>
          <p>Políticas de privacidade</p>
          <p>Termos e condições</p>
        </div>
        <div className={styles.footerInfo}>
          <h3>Contato</h3>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/"
          >
            <CiLinkedin size={30} /> Desenvolvido por Hideo Hirata
          </a>
          <a href="https://www.figma.com/@diridstudio">Desing by DiridStudio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
