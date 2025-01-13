import Header from "../../Components/Header/Header";
import { useUi } from "../../UiContext";

const HomePage = () => {
  const { contagem, setContagem } = useUi();
  return (
    <>
      <Header />
      <h1>Eu sou a Home {contagem}</h1>

      <button onClick={() => setContagem(contagem + 1)}> Mais</button>
      <button onClick={() => setContagem(contagem - 1)}>Menos</button>
      <p>Teste</p>
    </>
  );
};

export default HomePage;
