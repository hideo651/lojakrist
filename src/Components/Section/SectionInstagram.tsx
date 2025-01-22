import styles from "./SectionInstagram.module.css";
import { FaInstagram } from "react-icons/fa";
import Foto1 from "../../assets/forgot_img.png";
import Foto2 from "../../assets/register_img.png";
import Foto3 from "../../assets/login_img.png";
import Foto4 from "../../assets/otp_img.png";

const SectionInstagram = () => {
  return (
    <section className={`${styles.section} container`}>
      <h2 className="title">Nossos Stories do Instagram</h2>
      <div>
        <ul className={styles.fotosList}>
          <li className={styles.foto}>
            <img src={Foto1} alt="foto1" />
            <span>
              <FaInstagram size={30} color="white" />
            </span>
          </li>
          <li className={styles.foto}>
            <img src={Foto2} alt="foto2" />
            <span>
              <FaInstagram size={30} color="white" />
            </span>
          </li>
          <li className={styles.foto}>
            <img src={Foto3} alt="foto3" />
            <span>
              <FaInstagram size={30} color="white" />
            </span>
          </li>
          <li className={styles.foto}>
            <img src={Foto4} alt="foto4" />
            <span>
              <FaInstagram size={30} color="white" />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionInstagram;
