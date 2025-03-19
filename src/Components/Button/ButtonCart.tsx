import React from "react";
import { useUi } from "../../UiContext";
import styles from "./ButtonCart.module.css";
import { IoCartOutline } from "react-icons/io5";

const ButtonCart = () => {
  const { carrinho } = useUi();
  const [cartMenu, setCartMenu] = React.useState(false);

  return (
    <div>
      <button className={styles.button} onClick={() => setCartMenu(!cartMenu)}>
        <IoCartOutline size={25} />
      </button>
      {cartMenu ? (
        <div className={styles.cartList}>
          <h1>TESTE</h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonCart;
