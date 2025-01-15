import React from "react";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Button/Button";

const loginSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z.string().min(1, { message: "Digite uma senha válida" }),
});

type ILogin = {
  error: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  function handleForm(data: any) {
    setLoading(true);
    setTimeout(() => {
      setLoading(true);
      console.log(data);
      navigate("/");
    }, 2000);
    // setTimeout é apenas para simular uma interação com a API
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          label="Email do usuário"
          type="text"
          error={errors.email?.message}
          {...register(`email`)}
        />
        <Input
          label="Senha"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
    </>
  );
};

export default LoginForm;
