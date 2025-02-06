import { ProfileAddressProps } from "../../Interfaces";
import { useModal } from "../../ModalContext";
import FormEditAddress from "../Form/FormEditAddress";
import styles from "./ModalEditAddress.module.css";

const ModalEditAddress: React.FC<ProfileAddressProps> = () => {
  const { setIsEditModalOpen } = useModal();
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsEditModalOpen(false);
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.form}>
        <h2>Editar endereço</h2>
        <FormEditAddress />
      </div>
    </div>
  );
};

export default ModalEditAddress;
