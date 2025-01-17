import styles from "./ButtonCart.module.css";
import { IoCartOutline } from "react-icons/io5";

const ButtonCart = () => {
  const onSubmit = () => {
    console.log("clicado");
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
