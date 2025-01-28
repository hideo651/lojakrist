import { FaStar } from "react-icons/fa";
import styles from "./SectionProductBuy.module.css";

import FormAddProduct from "../Form/FormAddProduct";
import { IDataProducts } from "../../Interfaces";

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
        <p>{produto.descricao}</p>
        <FormAddProduct product={produto} />
      </div>
    </section>
  );
};

export default SectionProductBuy;
