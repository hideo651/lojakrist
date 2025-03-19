import { FaHouse } from "react-icons/fa6";
import Button from "../Button/Button";
import styles from "./ProfileAddress.module.css";
import ButtonDelete from "../Button/ButtonDelete";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useUi } from "../../UiContext";
import { IAddresEditFrom } from "../../Interfaces";
import { useModal } from "../../ModalContext";

const ProfileAddress = () => {
  const {
    endereco,
    deleteAddress,
    editAddress,
    setDataEditAddress,
    dataEditAddress,
    searchCep,
  } = useUi();

  const { setIsEditModalOpen, setIsAddAddressModalOpen } = useModal();

  const handleDelete = (data: number) => {
    deleteAddress(data);
  };

  const handleEdit = (data: IAddresEditFrom) => {
    setIsEditModalOpen(true);
    setDataEditAddress(data);
  };

  const handleAddAddress = () => {
    setIsAddAddressModalOpen(true);
  };

  return (
    <>
      {endereco.length !== 0 ? (
        <section className={`${styles.section} animeLeft`}>
          <div className={styles.addBtn}>
            <Button onClick={handleAddAddress}>
              <FaHouse /> Adicionar um novo endereço
            </Button>
          </div>
          <ul className={styles.addressList}>
            {endereco.map((data) => (
              <li key={data.id}>
                <div className={styles.info}>
                  <h3>{data.nome}</h3>
                  <p>{`${data.rua}, ${data.numero} - ${data.bairro}`}</p>
                  <p>{`${data.cidade} - ${data.estado}, ${data.cep}`}</p>
                  <p>{`Telefone: ${data.telefone}`}</p>
                </div>
                <div className={styles.btn}>
                  <ButtonDelete onClick={() => handleDelete(data.id)}>
                    <FaRegTrashAlt />
                    Deletar
                  </ButtonDelete>
                  <Button onClick={() => handleEdit(data)}>
                    <FaRegEdit />
                    Editar
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className={`${styles.section} animeLeft`}>
          <Button onClick={handleAddAddress}>
            <FaHouse /> Adicionar um novo endereço
          </Button>
          <h1>Nenhum endereço adicionado</h1>
        </section>
      )}
    </>
  );
};

export default ProfileAddress;
