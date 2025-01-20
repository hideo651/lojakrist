import { Link } from "react-router-dom";
import styles from "./Slides.module.css";
import Modelo from "../../assets/modelo_home.jpg";

const Slides = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.introducao}`}>
          <div className={styles.introducaoInfo}>
            <p>Roupas Exclusivas</p>
            <h1>Coleção Feminina</h1>
            <span>DESCONTOS DE 40%</span>
            <Link to="/shop">Compre agora →</Link>
          </div>
          <div className={styles.modeloImg}>
            <img src={Modelo} alt="modelo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Slides;
