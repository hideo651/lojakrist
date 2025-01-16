import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUi } from "../../UiContext";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Digite um nome válido" }),
    lastname: z.string().min(1, { message: "Digite um sobrenome válido" }),
    email: z.string().email({ message: "Digite um email válido" }),
    password: z.string().min(1, { message: "Digite uma senha válida" }),
    confirm: z.string().min(1, { message: "Digite uma senha válida" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "A senha não é igual",
    path: ["confirm"],
  });

interface ISignUp {
  name: string;
  lastname: string;
  email: string;
  password: string;
  error: string;
  confirm: string;
}

const SignupForm = () => {
  const { userRegister, loading } = useUi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: ISignUp) => {
    const { confirm, error, ...formData } = data;
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Primeiro nome"
        type="text"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Sobrenome"
        type="text"
        {...register("lastname")}
        error={errors.lastname?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Digite novamente a senha"
        type="password"
        {...register("confirm")}
        error={errors.confirm?.message}
      />

      {loading ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Cadastre-se</Button>
      )}
    </form>
  );
};

export default SignupForm;
