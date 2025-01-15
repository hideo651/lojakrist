import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
});

interface IForgot {
  email: string;
  error: string;
}

const ForgotForm = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgot>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: IForgot) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      navigate("/");
    }, 2000);
    // setTimeout é apenas para simular uma interação com a API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email da conta"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      {loading ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Recuperar senha</Button>
      )}
    </form>
  );
};

export default ForgotForm;
