import React from "react";
import styles from "./CardComment.module.css";
import { useUi } from "../../UiContext";
import { FaStar } from "react-icons/fa";

const CardComment = () => {
  const { comentarios } = useUi();
  return (
    <div>
      {comentarios.map((comentario, index) => {
        return (
          <div className={styles.comentario} key={index}>
            <div className={styles.comentarioNome}>
              <div className={styles.img}>
                <img src={comentario.img} alt="" />
              </div>
              <div>
                <p>{comentario.nome}</p>
                {[...Array(5)].map((star, index) => {
                  return <FaStar size={30} color="#ffc107" key={index} />;
                })}
              </div>
            </div>
            <h3>{comentario.titulo}</h3>
            <p>{comentario.comentario}</p>
            <span>{comentario.data}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CardComment;
