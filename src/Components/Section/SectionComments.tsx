import { FaStar } from "react-icons/fa";
import styles from "./SectionComments.module.css";
import Foto from "../../assets/depoimento.jpg";

const SectionComments = () => {
  return (
    <section className={`${styles.section} `}>
      <div>
        <h2 className="title">Comentários de nossos clientes</h2>
        <ul className={styles.comentList}>
          <li className={styles.coment}>
            <div>
              {[...Array(5)].map((star, index) => {
                return <FaStar size={30} color="#ffc107" key={index} />;
              })}
            </div>
            <p>
              "Essa loja é simplesmente fantástica! As roupas têm um design
              moderno, são de alta qualidade e caem perfeitamente. Sempre
              encontro algo que combina com meu estilo!"
            </p>
            <div className={styles.comentariosInfo}>
              <div className={styles.usuarioFoto}>
                <img src={Foto} alt="foto" />
              </div>
              <div className={styles.usuarioInfo}>
                <p>Ana Silva</p>
                <span>Modelo</span>
              </div>
            </div>
          </li>
          <li className={styles.coment}>
            <div>
              {[...Array(5)].map((star, index) => {
                return <FaStar size={30} color="#ffc107" key={index} />;
              })}
            </div>
            <p>
              "Além de uma coleção incrível, o atendimento aqui é impecável. A
              equipe é super atenciosa e sempre pronta para ajudar a encontrar a
              peça ideal!"
            </p>
            <div className={styles.comentariosInfo}>
              <div className={styles.usuarioFoto}>
                <img
                  src="https://images.stockcake.com/public/3/8/d/38dd7933-24d1-4e77-b72d-6b8b18463230_large/mountain-selfie-adventure-stockcake.jpg"
                  alt="foto"
                />
              </div>
              <div className={styles.usuarioInfo}>
                <p>Paulo Santos</p>
                <span>Médico</span>
              </div>
            </div>
          </li>
          <li className={styles.coment}>
            <div>
              {[...Array(5)].map((star, index) => {
                return <FaStar size={30} color="#ffc107" key={index} />;
              })}
            </div>
            <p>
              "Adoro a experiência de comprar nessa loja! Os produtos são cheios
              de personalidade e o ambiente é acolhedor. Perfeito para quem
              busca estilo e conforto!"
            </p>
            <div className={styles.comentariosInfo}>
              <div className={styles.usuarioFoto}>
                <img
                  src="https://images.stockcake.com/public/e/3/1/e3101638-674a-43a0-ac70-e01d34dbfbcc_large/sunset-beach-selfie-stockcake.jpg"
                  alt="foto"
                />
              </div>
              <div className={styles.usuarioInfo}>
                <p>Ana Júlia</p>
                <span>Modelo</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionComments;
