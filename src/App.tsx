import { ToastContainer } from "react-toastify";
import "./App.css";
import MainRoutes from "./Routes/Routes";

function App() {
  return (
    <>
      <MainRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
