import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Button/Button";
import { useUi } from "../../UiContext";

const loginSchema = z.object({
  email: z.string().email({ message: "Digite um email válido" }),
  password: z.string().min(1, { message: "Digite uma senha válida" }),
});

interface ILoginForm {
  error: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin, loading } = useUi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const handleForm = (data: any) => {
    userLogin(data);
  };

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
