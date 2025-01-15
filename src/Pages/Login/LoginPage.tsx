import styles from "./LoginPage.module.css";
import Foto from "../../assets/login_img.png";
import Header from "../../Components/Header/Header";
import LoginForm from "../../Components/Form/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div>
          <img src={Foto} alt="" />
        </div>
        <div className={styles.cadastro}>
          <LoginForm />
          <Link className={styles.perdeu} to="/forgot">
            Perdeu a senha ?
          </Link>
          <div>
            <h2>Cadastre-se</h2>
            <p>Ainda não possui conta ? Cadastre-se no site</p>
            <Link className={styles.link} to="/cadastro">
              Cadastro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
