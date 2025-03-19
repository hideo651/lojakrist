import React, { useEffect, useState } from "react";
import { useUi } from "../../UiContext";
import styles from "./FormAddAddress.module.css";
import { z } from "zod";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IDataAddres } from "../../Interfaces";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useModal } from "../../ModalContext";

const schemaAddAddres = z.object({
  nome: z.string().min(2, { message: "Digite um nome" }),
  rua: z.string().min(2, { message: "Digite uma rua" }),
  telefone: z.string().min(2, { message: "Digite um telefone" }),
  bairro: z.string().min(2, { message: "Digite um bairro" }),
  cidade: z.string().min(2, { message: "Digite uma cidade" }),
  estado: z.string().min(2, { message: "Digite um estado" }),
  numero: z.string().min(1, { message: "Digite um número" }),
  cep: z.string().length(8, { message: "Digite um CEP válido com 8 números" }),
});

const FormAddAddress = () => {
  const { searchCep, cepEndereco, addAddress } = useUi();
  const { setIsAddAddressModalOpen } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IDataAddres>({ resolver: zodResolver(schemaAddAddres) });

  const cep = watch("cep")?.replace(/\D/g, "").slice(0, 8); // Garante que só aceita números e 8 dígitos

  useEffect(() => {
    if (cepEndereco) {
      setValue("rua", cepEndereco.street || "");
      setValue("bairro", cepEndereco.neighborhood || "");
      setValue("cidade", cepEndereco.city || "");
      setValue("estado", cepEndereco.state || "");
    }
  }, [cepEndereco, setValue]);

  const handleClickCep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(cep);

    if (!cep || cep.length !== 8) {
      toast.error("Digite um CEP válido com 8 números.");
      return;
    }

    try {
      searchCep(cep);
    } catch (error) {
      toast.error("Erro ao buscar o CEP.");
    } finally {
    }
  };

  const handleClick = (data: IDataAddres) => {
    addAddress({ ...data });
    setIsAddAddressModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(handleClick)} className={styles.form}>
      <Input label="Nome" {...register("nome")} error={errors.nome?.message} />
      <Input
        label="Telefone"
        {...register("telefone")}
        error={errors.telefone?.message}
      />

      <Input
        label="CEP"
        type="text"
        error={errors.cep?.message}
        {...register("cep")}
        maxLength={8}
        onInput={(e) =>
          (e.currentTarget.value = e.currentTarget.value
            .replace(/\D/g, "")
            .slice(0, 8))
        }
      />

      <div className={styles.button}>
        <Button onClick={handleClickCep}>Buscar endereço</Button>
      </div>

      <Input label="Rua" {...register("rua")} error={errors.rua?.message} />
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
        type="text"
        {...register("numero")}
        error={errors.numero?.message}
      />

      <Button>Enviar</Button>
    </form>
  );
};

export default FormAddAddress;
