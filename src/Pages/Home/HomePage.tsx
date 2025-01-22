import React from "react";
import styles from "./HomePage.module.css";
import Header from "../../Components/Header/Header";
import Slides from "../../Components/Slides/Slides";
import CardSecondary from "../../Components/Cards/CardSecondary";
import Modelo01 from "../../assets/modelo01.svg";
import Modelo02 from "../../assets/modelo02.svg";
import Modelo03 from "../../assets/modelo03.svg";
import Modelo04 from "../../assets/modelo04.svg";
import { Data } from "../../FakeApi";
import { Link } from "react-router-dom";
import CardPrimary from "../../Components/Cards/CardPrimary";
import SectionComments from "../../Components/Section/SectionComments";
import SectionInstagram from "../../Components/Section/SectionInstagram";
import SectionSupport from "../../Components/Section/SectionSupport";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Slides />
        <section className={styles.categoria}>
          <h2 className="title">Categorias</h2>
          <ul>
            <li>
              <CardSecondary img={Modelo01} alt="modelo" />
              <span>Moda Masculina</span>
            </li>
            <li>
              <CardSecondary img={Modelo02} alt="modelo" />
              <span>Moda Casual</span>
            </li>
            <li>
              <CardSecondary img={Modelo03} alt="modelo" />
              <span>Moda Feminina</span>
            </li>
            <li>
              <CardSecondary img={Modelo04} alt="modelo" />
              <span>Moda Moderna</span>
            </li>
          </ul>
        </section>
        <section className={styles.produtos}>
          <h2 className="title">Produtos mais vendidos</h2>
          <ul className={styles.produtosList}>
            {Data.map((dados) => {
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
        <SectionComments />
        <SectionInstagram />
        <SectionSupport />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
