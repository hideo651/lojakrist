import { useUi } from "../../UiContext";

const HomePage = () => {
  const { contagem, setContagem } = useUi();
  return (
    <>
      <h1>Eu sou a Home {contagem}</h1>

      <button onClick={() => setContagem(contagem + 1)}> Mais</button>
      <button onClick={() => setContagem(contagem - 1)}>Menos</button>
    </>
  );
};

export default HomePage;
