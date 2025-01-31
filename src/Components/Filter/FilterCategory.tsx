import { Data } from "../../FakeApi";
import { IDataProducts } from "../../Interfaces";
import { useUi } from "../../UiContext";
import styles from "./FilterCategory.module.css";

const FilterCtegory = () => {
  const { setProdutos, produtos } = useUi();

  const categorias = [
    "todos",
    "bermuda",
    "calça",
    "jaqueta",
    "vestido",
    "moletom",
    "camiseta",
  ];

  const handleCategoriaChange = (e: any) => {
    if (e.target.value === "todos") {
      setProdutos(Data);
    } else {
      const filter = Data.filter((produto) => {
        return produto.categoria === e.target.value;
      });

      setProdutos(filter);
    }
  };

  return (
    <div>
      <h3>Categorias</h3>
      <form action="">
        {categorias.map((categoria, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                value={categoria}
                name="categoria"
                id={index.toString()}
                onChange={handleCategoriaChange}
                className={styles.input}
              />
              <label htmlFor={index.toString()}>
                {categoria.slice(0, 1).toUpperCase() + categoria.slice(1)}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterCtegory;
