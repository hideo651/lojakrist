import styles from "./SignupPage.module.css";
import SignupForm from "../../Components/Form/SignupForm";
import Header from "../../Components/Header/Header";
import Foto from "../../assets/register_img.png";

const SignupPage = () => {
  return (
    <>
      <Header />
      <section className={`${styles.section} animeLeft`}>
        <div>
          <img src={Foto} alt="foto de modelo" />
        </div>
        <div className={styles.registro}>
          <h1>Crie uma nova conta</h1>
          <SignupForm />
        </div>
      </section>
    </>
  );
};

export default SignupPage;
