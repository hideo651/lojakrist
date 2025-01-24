import { FaStar } from "react-icons/fa";
import styles from "./SectionProductBuy.module.css";
import { IDataProducts } from "../../UiContext";

const SectionProductBuy = (produto: IDataProducts) => {
  return (
    <section className={`${styles.section} container`}>
      <div>
        <div className={styles.divImg}>
          <img src={produto.img} alt="" />
        </div>
        <ul className={styles.imgList}>
          {[...Array(4)].map((foto, index) => {
            return (
              <li key={index}>
                <img src={produto.img} alt="foto" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.produtoInfo}>
        <h3>{produto.nome}</h3>
        <p>Produto de ótima qualidade</p>
        <div>
          {[...Array(5)].map((star, index) => {
            return <FaStar size={20} color="#ffc107" key={index} />;
          })}
          <span>5.0(120 Avaliações)</span>
        </div>
        <p>R$ {produto.preco}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolorum pariatur aperiam ullam odit reiciendis obcaecati, qui aliquid,
          molestias voluptatem ad voluptate, quod repudiandae saepe dignissimos
          commodi repellat ducimus rerum?
        </p>
      </div>
    </section>
  );
};

export default SectionProductBuy;
