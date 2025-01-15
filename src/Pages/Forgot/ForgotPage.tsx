import styles from "./ForgotPage.module.css";
import Foto from "../../assets/forgot_img.png";
import Header from "../../Components/Header/Header";
import ForgotForm from "../../Components/Form/ForgotForm";

const ForgotPage = () => {
  return (
    <>
      <Header />
      <section className={`${styles.section} animeLeft`}>
        <div>
          <img src={Foto} alt="foto de modelo" />
        </div>
        <div className={styles.esqueci}>
          <h1>Esqueci a senha</h1>
          <ForgotForm />
        </div>
      </section>
    </>
  );
};

export default ForgotPage;
