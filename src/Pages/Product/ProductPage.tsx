import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../FakeApi";
import Header from "../../Components/Header/Header";
import { HiH1 } from "react-icons/hi2";
import { DiVim } from "react-icons/di";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const produto = Data.find((e) => e.id === Number(productId));

  return (
    <>
      <Header />
      <main className="container">
        {produto ? (
          <div>
            <h1>Página do Produto {produto?.nome}</h1>
          </div>
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
