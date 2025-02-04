import React from "react";
import styles from "./FormComment.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUi } from "../../UiContext";

import Button from "../Button/Button";
import Input from "../Input/Input";

const commentSchema = z.object({
  nome: z.string().min(2, { message: "Digite um nome válido" }),
  email: z.string().min(3, { message: "Digite um email válido" }),
  comentario: z.string().min(3, { message: "Digite um comentário válido" }),
  titulo: z.string().min(3, { message: "Digite um título" }),
});

interface ICommentForm {
  error: string;
  nome: string;
  email: string;
  comentario: string;
  titulo: string;
}

const FormComment = () => {
  const { addComment } = useUi();
  const date = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICommentForm>({ resolver: zodResolver(commentSchema) });

  function handleForm(data: ICommentForm) {
    const { error, ...formatData } = data;
    addComment({
      ...formatData,
      data: date.toLocaleDateString(),
      img: "https://images.stockcake.com/public/e/2/a/e2a174ca-aa8e-4cf4-ac5a-193fdbd49b46_large/expressive-canine-portrait-stockcake.jpg",
    });
    reset();
  }
  return (
    <div className={styles.comentario}>
      <h3>Avalie o produto</h3>
      <form onSubmit={handleSubmit(handleForm)} className={styles.form}>
        <Input
          label="Nome"
          type="text"
          {...register("nome")}
          error={errors.nome?.message}
        />
        <Input
          label="Email"
          type="text"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Título"
          error={errors.titulo?.message}
          {...register("titulo")}
        />
        <div className={styles.divTexarea}>
          <label htmlFor="comment">Sua avaliação</label>
          <textarea
            className={styles.textarea}
            id="comment"
            placeholder="Comente..."
            {...register("comentario")}
          />
          {errors.comentario?.message && (
            <p className={styles.error}>{errors.comentario?.message}</p>
          )}
        </div>
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default FormComment;
