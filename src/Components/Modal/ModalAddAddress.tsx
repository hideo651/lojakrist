import React from "react";
import styles from "./ModalEditAddress.module.css";
import { useModal } from "../../ModalContext";
import FormAddAddress from "../Form/FormAddAddress";
import Button from "../Button/Button";
import ButtonClose from "../Button/ButtonClose";
import { IoClose } from "react-icons/io5";

const ModalAddAddress = () => {
  const { setIsAddAddressModalOpen } = useModal();
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsAddAddressModalOpen(false);
  };

  const handleClick = () => {
    setIsAddAddressModalOpen(false);
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.form}>
        <div className={styles.titulo}>
          <ButtonClose onClick={handleClick}>
            <IoClose size={30} />
          </ButtonClose>
          <h2>Adicionar um novo Endereço</h2>
        </div>
        <FormAddAddress />
      </div>
    </div>
  );
};

export default ModalAddAddress;
