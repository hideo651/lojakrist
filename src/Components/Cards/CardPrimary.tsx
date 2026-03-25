import styles from "./CardPrimary.module.css";

interface ICardPrimaryProps {
  img: string;
  alt: string;
  nome: string;
  intro: string;
  preco: number;
}

const CardPrimary = (data: ICardPrimaryProps) => {
  const dividir = (valor: number) => {
    let arredondado = Math.round((valor / 3) * 100) / 100;

    // Forçar o número a terminar com "99" nas casas decimais
    arredondado = Math.floor(arredondado * 100) / 100; // Remove qualquer parte decimal extra
    arredondado = Math.floor(arredondado) + 0.99; // Garante que termina em 99

    return arredondado;
  };
  dividir(data.preco);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.divImg}>
          <img src={data.img} alt={data.alt} />
        </div>
        <div className={styles.cardInfo}>
          <h3>{data.nome}</h3>
          <p>
            {`R$ ${data.preco}`}{" "}
            <span className={styles.spanPrimary}>à vista</span>
          </p>
          <p>
            ou{" "}
            <span className={styles.spanSecondary}>{`3 x de ${dividir(
              data.preco
            )}`}</span>{" "}
            no cartão de crédito
          </p>
        </div>
      </div>
    </>
  );
};

export default CardPrimary;
