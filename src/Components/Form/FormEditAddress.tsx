import React from "react";
import { z } from "zod";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { IDataAddres } from "../../Interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUi } from "../../UiContext";
import Button from "../Button/Button";
import { useModal } from "../../ModalContext";

const EditSchema = z.object({
  nome: z.string().min(2, { message: "Digite um nome" }),
  rua: z.string().min(2, { message: "Digite uma rua" }),
  telefone: z.string().min(2, { message: "Digite um telefone" }),
  bairro: z.string().min(2, { message: "Digite um bairro" }),
  cidade: z.string().min(2, { message: "Digite uma cidade" }),
  estado: z.string().min(2, { message: "Digite um estado" }),
  numero: z.number().min(1, { message: "Digite um número" }),
});

const FormEditAddress = () => {
  const { endereco, editAddress, dataEditAddress } = useUi();
  const { setIsEditModalOpen } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDataAddres>({
    resolver: zodResolver(EditSchema),
  });

  const handleForm = (data: IDataAddres) => {
    editAddress({ ...data, id: dataEditAddress?.id! });
    setIsEditModalOpen(false);
  };

  React.useEffect(() => {
    if (!endereco || !Array.isArray(endereco) || !dataEditAddress) return;

    reset({
      nome: dataEditAddress?.nome || "",
      rua: dataEditAddress?.rua || "",
      telefone: dataEditAddress?.telefone || "",
      bairro: dataEditAddress?.bairro || "",
      cidade: dataEditAddress?.cidade || "",
      estado: dataEditAddress?.estado || "",
      numero: dataEditAddress?.numero || 0,
    });
  }, [dataEditAddress, endereco, reset]);

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input label="Nome" {...register("nome")} error={errors.nome?.message} />
      <Input label="Rua" {...register("rua")} error={errors.rua?.message} />
      <Input
        label="Telefone"
        {...register("telefone")}
        error={errors.telefone?.message}
      />
      <Input
        label="Bairro"
        {...register("bairro")}
        error={errors.bairro?.message}
      />
      <Input
        label="Cidade"
        {...register("cidade")}
        error={errors.cidade?.message}
      />
      <Input
        label="Estado"
        {...register("estado")}
        error={errors.estado?.message}
      />
      <Input
        label="Número"
        type="number"
        {...register("numero")}
        error={errors.numero?.message}
      />
      <Button>Editar</Button>
    </form>
  );
};

export default FormEditAddress;
