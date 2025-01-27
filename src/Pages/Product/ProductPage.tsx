import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../FakeApi";
import Header from "../../Components/Header/Header";
import SectionProductBuy from "../../Components/Section/SectionProductBuy";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const produto = Data.find((e) => e.id === Number(productId));

  return (
    <>
      <Header />
      <main className="container">
        {produto ? (
          <>
            <SectionProductBuy
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              categoria={produto.categoria}
              intro={produto.intro}
              descricao={produto.descricao}
              img={produto.img}
            />
          </>
        ) : (
          <div>
            <h1>Página do Produto {productId} não existe</h1>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductPage;
