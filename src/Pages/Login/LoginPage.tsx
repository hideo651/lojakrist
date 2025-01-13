import styles from "./LoginPage.module.css";
import Foto from "../../assets/login_img.png";
import Header from "../../Components/Header/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <img src={Foto} alt="" />
      <h1>Eu sou a página de Login</h1>
    </>
  );
};

export default LoginPage;
