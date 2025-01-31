import styles from "./Sidenav.module.css";

import { useUi } from "../../UiContext";
import { FaRegCreditCard, FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import React from "react";

interface IPropsSidenav {
  showSection: string;
  setShowSection: (data: string) => void;
}

const Sidenav: React.FC<IPropsSidenav> = ({ showSection, setShowSection }) => {
  const { data } = useUi();

  const handleClick = (data: string) => {
    setShowSection(data);
  };

  console.log(showSection);

  return (
    <div className={styles.sidenav}>
      <div className={styles.profile}>
        <div className={styles.foto}>
          <img
            src="https://images.stockcake.com/public/e/2/a/e2a174ca-aa8e-4cf4-ac5a-193fdbd49b46_large/expressive-canine-portrait-stockcake.jpg"
            alt="foto do usuário"
          />
        </div>
        <div className={styles.info}>
          <h3>Bem vindo</h3>
          {`${data.name} ${data.lastname}`}
        </div>
      </div>
      <ul className={styles.btnList}>
        <li>
          <button
            onClick={() => handleClick("usuario")}
            style={
              showSection === "usuario"
                ? { background: "black", color: "white" }
                : {}
            }
          >
            <FaRegUser size={20} /> Informações de usuário
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("pedidos")}
            style={
              showSection === "pedidos"
                ? { background: "black", color: "white" }
                : {}
            }
          >
            <GoPackage size={20} /> Meus Pedidos
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("carrinho")}
            style={
              showSection === "carrinho"
                ? { background: "black", color: "white" }
                : {}
            }
          >
            <IoCartOutline size={20} /> Carrinho
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("endereço")}
            style={
              showSection === "endereço"
                ? { background: "black", color: "white" }
                : {}
            }
          >
            <FiMapPin size={20} /> Endereço
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("cartão")}
            style={
              showSection === "cartão"
                ? { background: "black", color: "white" }
                : {}
            }
          >
            <FaRegCreditCard size={20} /> Cartão
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
