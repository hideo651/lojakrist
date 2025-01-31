import { useUi } from "../../UiContext";
import styles from "./ButtonCart.module.css";
import { IoCartOutline } from "react-icons/io5";

const ButtonCart = () => {
  const { carrinho } = useUi();
  const onSubmit = () => {
    console.log("clicado");
    console.log(carrinho);
  };
  return (
    <>
      <button className={styles.button} onClick={onSubmit}>
        <IoCartOutline size={25} />
      </button>
    </>
  );
};

export default ButtonCart;
