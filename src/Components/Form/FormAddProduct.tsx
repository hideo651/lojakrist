import React from "react";
import styles from "./FormAddProduct.module.css";

import { useUi } from "../../UiContext";
import { GrSubtract } from "react-icons/gr";
import { IoAddOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { IDataCartProduct, IDataProducts } from "../../Interfaces";

interface IFormAddProductProps {
  product: IDataProducts; // O produto é passado como um objeto
}

const FormAddProduct: React.FC<IFormAddProductProps> = ({ product }) => {
  const { carrinho, addProduct } = useUi();
  const colors = [
    { background: "#3c3c3c", cor: "preto" },
    { background: "#bc0b27", cor: "vermelho" },
    { background: "#1b66ff", cor: "azul" },
    { background: "#f0898f", cor: "rosa" },
    { background: "#7ebe6d", cor: "verde" },
  ];
  const tamanhos = ["P", "M", "G", "GG", "EGG"];

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      quantidade: 1,
      cor: "preto",
      tamanho: "M",
      nome: product.nome,
      img: product.img,
      preco: product.preco,
    },
  });

  const quantidade = watch("quantidade");
  const cor = watch("cor");
  const tamanho = watch("tamanho");

  function handleClick(data: IDataCartProduct) {
    addProduct(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleClick)}>
      <h3>Cores</h3>
      <div className={styles.colorList}>
        {colors.map((e, index) => (
          <button
            type="button"
            key={index}
            style={{
              backgroundColor: e.background,
              boxShadow:
                cor === e.cor ? "0 2px 5px rgba(13, 13, 13, 1)" : undefined,
            }}
            aria-pressed={cor === e.cor}
            onClick={() => setValue("cor", e.cor)}
          />
        ))}
      </div>
      <h3>Tamanhos</h3>
      <div className={styles.tamanhoList}>
        {tamanhos.map((e, index) => (
          <button
            style={{
              background: tamanho === e ? "black" : undefined,
              color: tamanho === e ? "white" : undefined,
            }}
            type="button"
            key={index}
            className={styles.sizeButton}
            aria-pressed={e === e}
            onClick={() => setValue("tamanho", e)}
          >
            {e}
          </button>
        ))}
      </div>
      <div className={styles.addCard}>
        <div className={styles.amount}>
          <button
            type="button"
            onClick={() =>
              quantidade > 1 && setValue("quantidade", quantidade - 1)
            }
          >
            <GrSubtract size={20} />
          </button>
          {quantidade}
          <button
            type="button"
            onClick={() => setValue("quantidade", quantidade + 1)}
          >
            <IoAddOutline size={20} />
          </button>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </form>
  );
};

export default FormAddProduct;
