import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUiContext {
  contagem: number;
  setContagem: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: boolean | null;
  data: IDataRegister;
  userLogin: (data: IDataLogin) => void;
  userRegister: (data: IDataRegister) => void;
  userLogout: () => void;
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
  const [data, setData] = React.useState<IDataRegister>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [contagem, setContagem] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [login, setLogin] = React.useState<boolean | null>(null);

  const navigate = useNavigate();

  const userLogin = (data: IDataLogin) => {
    const user: IDataRegister = JSON.parse(localStorage.getItem("@user")!);

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

        localStorage.setItem("@token", JSON.stringify("123tokenfake"));
      } else {
        setLoading(false);
        const notify = () => toast.error("Email ou senha inválidos");
        notify();
      }
    }, 1500);
    // setTimeout é apenas para simular uma interação com a API
  };

  const userRegister = (data: IDataRegister) => {
    localStorage.setItem("@user", JSON.stringify(data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
    // setTimeout é apenas para simular uma interação com a API
  };

  const userLogout = () => {
    console.log("clicou");
    localStorage.removeItem("@token");
    setData({ name: "", lastname: "", email: "", password: "" });
    navigate("/");
  };

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
        data,
        userLogout,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
