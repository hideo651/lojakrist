import { FaHouse } from "react-icons/fa6";
import Button from "../Button/Button";
import styles from "./ProfileAddress.module.css";
import { LuPhoneCall } from "react-icons/lu";
import ButtonDelete from "../Button/ButtonDelete";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useUi } from "../../UiContext";

const ProfileAddress = () => {
  const { endereco, deleteAddress, editAddress } = useUi();
  // const endereco = [
  //   {
  //     nome: "José",
  //     id: 1,
  //     rua: "Avenida Paulista",
  //     bairro: "Bela Vista",
  //     numero: 1578,
  //     cep: "01310-200",
  //     cidade: "São Paulo",
  //     estado: "SP",
  //     telefone: "(11) 987234765",
  //   },
  //   {
  //     nome: "Luna",
  //     id: 2,
  //     rua: "Rua das Flores",
  //     bairro: "Centro",
  //     numero: 120,
  //     cep: "80020-250",
  //     cidade: "Curitiba",
  //     estado: "PR",
  //     telefone: "(11) 987234765",
  //   },
  // ];

  const handleDelete = (data: number) => {
    deleteAddress(data);
  };

  const handleEdit = (data: number) => {
    editAddress(data);
  };

  return (
    <>
      {endereco.length !== 0 ? (
        <section className={`${styles.section} animeLeft`}>
          <div className={styles.addBtn}>
            <Button>
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
                  <Button onClick={() => handleEdit(data.id)}>
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
          <h1>Nenhum endereço adicionado</h1>
        </section>
      )}
    </>
  );
};

export default ProfileAddress;
