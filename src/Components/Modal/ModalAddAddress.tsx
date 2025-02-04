import { ProfileAddressProps } from "../../Interfaces";
import { useModal } from "../../ModalContext";
import FormEditAddress from "../Form/FormEditAddress";
import styles from "./ModalAddAddress.module.css";

const ModalAddAddress: React.FC<ProfileAddressProps> = ({ setEditModal }) => {
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

export default ModalAddAddress;
