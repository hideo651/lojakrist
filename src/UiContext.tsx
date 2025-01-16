import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUiContext {
  contagem: number;
  setContagem: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: boolean | null;
  userLogin: (data: IDataLogin) => void;
  userRegister: (data: IDataRegister) => void;
}

interface IDataLogin {
  email: string;
  password: string;
}

interface IDataRegister {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = React.useState({});
  const [contagem, setContagem] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [login, setLogin] = React.useState<boolean | null>(null);

  const navigate = useNavigate();

  const userLogin = (data: IDataLogin) => {
    const user: IDataRegister = JSON.parse(localStorage.getItem("@user")!);

    if (user === null) {
      console.log("não existe");
    }

    setLoading(true);

    setTimeout(() => {
      if (user === null) {
        setLoading(false);
        const notify = () => toast.error("Email ou senha inválidos");
        notify();
      } else if (data.email === user.email && data.password === user.password) {
        setLoading(false);
        navigate("/");
        setLogin(true);
        setData(user);
        console.log("Login realizado com sucesso");
        localStorage.setItem("@token", JSON.stringify("123tokenfake"));
      } else {
        console.log("Senha ou email inválido");
        setLoading(false);
        const notify = () => toast.error("Email ou senha inválidos");
        notify();
      }
    }, 1500);
    // setTimeout é apenas para simular uma interação com a API
  };

  const userRegister = (data: IDataRegister) => {
    console.log(data, "Registro");
    localStorage.setItem("@user", JSON.stringify(data));
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      navigate("/login");
    }, 1500);
    // setTimeout é apenas para simular uma interação com a API
  };

  console.log(login);

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@token");

      if (token) {
        setLogin(true);
        const user: IDataRegister = JSON.parse(localStorage.getItem("@user")!);
        setData(user);
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  return (
    <UiContext.Provider
      value={{
        contagem,
        setContagem,
        userLogin,
        userRegister,
        loading,
        setLoading,
        login,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
