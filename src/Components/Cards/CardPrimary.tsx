import styles from "./CardPrimary.module.css";

interface ICardPrimaryProps {
  img: string;
  alt: string;
  nome: string;
  intro: string;
  preco: number;
}

const CardPrimary = (data: ICardPrimaryProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.divImg}>
          <img src={data.img} alt={data.alt} />
        </div>
        <div className={styles.cardInfo}>
          <h3>{data.nome}</h3>
          <p>{data.intro}</p>
          <p>{data.preco}</p>
        </div>
      </div>
    </>
  );
};

export default CardPrimary;
