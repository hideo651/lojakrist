import { useUi } from "../../UiContext";
import styles from "./ProfileCart.module.css";

const ProfileCart = () => {
  const { carrinho } = useUi();
  return (
    <section className={`${styles.section} animeLeft`}>
      <h1 className="title">Finalizar Compra</h1>
      <div>
        <div className={styles.nomes}>
          <div>
            <p>Produtos</p>
          </div>
          <div>
            <p>Preço</p>
          </div>
          <div>
            <p>Quantidade</p>
          </div>
          <div>
            <p>Subtotal</p>
          </div>
        </div>
      </div>
      {carrinho.length > 0 ? (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              <div className={styles.intro}>
                <div className={styles.foto}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.info}>
                  <h2>{item.nome}</h2>
                  <p>{`Tamanho: ${item.tamanho}`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>Nenhum produto no carrinho </h1>
        </div>
      )}
    </section>
  );
};

export default ProfileCart;
