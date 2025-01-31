import React from "react";
import styles from "./ProfileUser.module.css";
import { useUi } from "../../UiContext";
import Button from "../Button/Button";
import { FaEdit } from "react-icons/fa";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const profileSchema = z.object({
  nome: z.string().min(1, { message: "Digite uma senha válida" }),
  sobrenome: z.string().min(1, { message: "Digite uma senha válida" }),
  email: z.string().email({ message: "Digite um email válido" }),
  telefone: z.string().min(1, { message: "Digite uma senha válida" }),
});

interface IProfileForm {
  error: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
}

const ProfileUser = () => {
  const { data } = useUi();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // <-- Para atualizar os valores do formulário
  } = useForm<IProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nome: data?.name || "", // Definir valores iniciais do formulário
      sobrenome: data?.lastname || "",
      email: data?.email || "",
    },
  });

  React.useEffect(() => {
    reset({
      nome: data?.name || "",
      sobrenome: data?.lastname || "",
      email: data?.email || "",
    });
  }, [data, reset]); // Sempre que `data` mudar, o formulário será atualizado

  const handleForm = (formData: IProfileForm) => {
    console.log("Dados enviados:", formData);
  };

  return (
    <div className={styles.user}>
      <div className={styles.foto}>
        <img
          src="https://images.stockcake.com/public/e/2/a/e2a174ca-aa8e-4cf4-ac5a-193fdbd49b46_large/expressive-canine-portrait-stockcake.jpg"
          alt=" foto de perfil"
        />
      </div>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          label={"Nome"}
          error={errors.nome?.message}
          {...register("nome")}
          type="text"
        />
        <Input
          label={"Sobrenome"}
          error={errors.sobrenome?.message}
          {...register("sobrenome")}
          type="text"
        />
        <Input
          label={"Email"}
          error={errors.email?.message}
          {...register("email")}
          type="text"
        />
        <Input
          label="Telefone"
          error=""
          {...register("telefone")}
          type="text"
        />

        <Button>
          <FaEdit /> EditarPerfil
        </Button>
      </form>
    </div>
  );
};

export default ProfileUser;
