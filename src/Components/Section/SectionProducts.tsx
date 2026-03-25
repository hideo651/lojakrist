import { Link } from "react-router-dom";
import styles from "./SectionProducts.module.css";
import CardPrimary from "../Cards/CardPrimary";
import { useUi } from "../../UiContext";

const SectionProducts = () => {
  const { produtos } = useUi();
  return (
    <section className={styles.section}>
      <ul className={styles.produtos}>
        {produtos.map((dados) => {
          return (
            <li key={dados.id}>
              <Link to={`/produto/${dados.id}`} className={styles.link}>
                <CardPrimary
                  img={dados.img}
                  alt={dados.nome}
                  nome={dados.nome}
                  intro={dados.intro}
                  preco={dados.preco}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionProducts;
