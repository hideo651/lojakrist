import { IoAddOutline } from "react-icons/io5";
import { useUi } from "../../UiContext";
import styles from "./ProfileCart.module.css";
import { GrSubtract } from "react-icons/gr";
import React from "react";

const ProfileCart = () => {
  const { carrinho, setCarrinho } = useUi();

  const updateQuantidade = (id: string, delta: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.nome === id
          ? { ...produto, quantidade: Math.max(1, produto.quantidade + delta) }
          : produto
      )
    );
  };

  return (
    <section className={`${styles.section} animeLeft`}>
      <h1 className="title">Carrinho de compras</h1>

      {carrinho.length > 0 ? (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              <div className={styles.intro}>
                <div className={styles.foto}>
                  <img src={item.img} alt={item.nome} />
                </div>
                <div className={styles.info}>
                  <h2>{item.nome}</h2>
                  <p>{`Tamanho: ${item.tamanho}`}</p>
                </div>
                <div className={styles.amount}>
                  <button
                    type="button"
                    onClick={() => updateQuantidade(item.nome, -1)}
                  >
                    <GrSubtract size={20} />
                  </button>
                  <div>{item.quantidade}</div>
                  <button
                    type="button"
                    onClick={() => updateQuantidade(item.nome, 1)}
                  >
                    <IoAddOutline size={20} />
                  </button>
                </div>
                <div className={styles.price}>
                  <p>{}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>Nenhum produto no carrinho</h1>
        </div>
      )}
    </section>
  );
};

export default ProfileCart;
