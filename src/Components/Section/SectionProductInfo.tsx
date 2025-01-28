import React from "react";
import styles from "./SectionProductInfo.module.css";
import CardComment from "../Cards/CardComment";
import FormComment from "../Form/FormComment";

const SectionProductInfo = () => {
  const [focus, setFocus] = React.useState("descricao");

  const handleClick = (data: string) => {
    setFocus(data);
  };

  return (
    <section className={styles.section}>
      <div className={styles.btnList}>
        <button
          className={
            focus === "descricao" ? styles.btnAtivo : styles.btnInativo
          }
          onClick={() => handleClick("descricao")}
        >
          Descrição
        </button>
        <button
          className={focus === "info" ? styles.btnAtivo : styles.btnInativo}
          onClick={() => handleClick("info")}
        >
          Informações Adicionais
        </button>
        <button
          className={
            focus === "comentarios" ? styles.btnAtivo : styles.btnInativo
          }
          onClick={() => handleClick("comentarios")}
        >
          Avaliações
        </button>
      </div>
      <div
        className={
          focus === "descricao"
            ? styles.descricaoAtivo
            : styles.descricaoInativo
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          numquam accusamus quibusdam minima odio culpa! Ratione, quae! Ab
          maxime error, saepe sit quasi facilis natus, nesciunt asperiores
          repellendus possimus consequatur.
        </p>
      </div>
      <div className={focus === "info" ? styles.infoAtivo : styles.infoInativo}>
        <div className={styles.info}>
          <span>Color:</span>
          <p>Azul, Branco, Vermelho, Rosa e Verde</p>
        </div>
        <div className={styles.info}>
          <span>Tamanhos:</span>
          <p>P, M, G, GG, EGG</p>
        </div>
      </div>
      <div
        className={
          focus === "comentarios" ? styles.commentAtivo : styles.commentInativo
        }
      >
        <CardComment />
        <FormComment />
      </div>
    </section>
  );
};

export default SectionProductInfo;
