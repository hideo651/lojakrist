import React from "react";
import styles from "./ModalEditAddress.module.css";
import { useModal } from "../../ModalContext";
import FormAddAddress from "../Form/FormAddAddress";

const ModalAddAddress = () => {
  const { setIsAddAddressModalOpen } = useModal();
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsAddAddressModalOpen(false);
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.form}>
        <h2>Adicionar um novo Endereço</h2>
        <FormAddAddress />
      </div>
    </div>
  );
};

export default ModalAddAddress;
