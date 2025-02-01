import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Comments, Data } from "./FakeApi";
import {
  IDataAddres,
  IDataCartProduct,
  IDataComments,
  IDataProducts,
  IProfileForm,
} from "./Interfaces";

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
  produtos: IDataProducts[];
  setProdutos: React.Dispatch<React.SetStateAction<IDataProducts[]>>;
  carrinho: IDataCartProduct[];
  setCarrinho: React.Dispatch<React.SetStateAction<IDataCartProduct[]>>;
  addProduct: (data: IDataCartProduct) => void;
  comentarios: IDataComments[];
  setComentarios: React.Dispatch<React.SetStateAction<IDataComments[]>>;
  addComment: (data: IDataComments) => void;
  editProfile: (data: IProfileForm) => void;
  endereco: IDataAddres[];
  setEndereco: React.Dispatch<React.SetStateAction<IDataAddres[]>>;
  deleteAddress: (data: number) => void;
  editAddress: (data: number) => void;
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
  const [produtos, setProdutos] = React.useState(Data);
  const [comentarios, setComentarios] = React.useState(Comments);
  const [carrinho, setCarrinho] = React.useState<IDataCartProduct[]>([]);
  const [endereco, setEndereco] = React.useState<IDataAddres[]>([
    {
      nome: "José",
      id: 1,
      rua: "Avenida Paulista",
      bairro: "Bela Vista",
      numero: 1578,
      cep: "01310-200",
      cidade: "São Paulo",
      estado: "SP",
      telefone: "(11) 987234765",
    },
    {
      nome: "Luna",
      id: 2,
      rua: "Rua das Flores",
      bairro: "Centro",
      numero: 120,
      cep: "80020-250",
      cidade: "Curitiba",
      estado: "PR",
      telefone: "(11) 987234765",
    },
  ]);

  const navigate = useNavigate();

  const userLogin = (data: IDataLogin) => {
    const user: IDataRegister = JSON.parse(localStorage.getItem("@user")!);
    const cart = JSON.parse(localStorage.getItem("@cart")!);

    if (cart !== null) {
      const data = JSON.parse(localStorage.getItem("@cart")!);
      setCarrinho(data);
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
    navigate("/");
    localStorage.removeItem("@token");
    setData({ name: "", lastname: "", email: "", password: "" });
  };

  const addProduct = (data: IDataCartProduct) => {
    console.log("fui chamado");
    // Verifica se o produto já existe no carrinho
    const findProduct = carrinho.find((e) => e.nome === data.nome);
    const productIndex = carrinho.findIndex((e) => e.nome === data.nome);

    if (findProduct) {
      // Se o produto já existir, atualiza a quantidade
      const updatedProduct = {
        ...findProduct,
        quantidade: findProduct.quantidade + data.quantidade, // Atualiza a quantidade
      };

      // Atualiza o estado do carrinho com o produto atualizado
      const updatedCart = [...carrinho];
      updatedCart[productIndex] = updatedProduct;

      setCarrinho(updatedCart);
      localStorage.setItem("@cart", JSON.stringify(updatedCart));
    } else {
      // Se o produto não existir, adiciona ao carrinho
      setCarrinho([...carrinho, data]);
      localStorage.setItem("@cart", JSON.stringify(data));
    }
  };

  const addComment = (data: IDataComments) => {
    console.log(data);
    setComentarios([...comentarios, data]);
  };

  const editProfile = (data: IProfileForm) => {
    console.log(data);
  };

  const editAddress = (data: number) => {
    console.log(data);
  };

  const deleteAddress = (data: number) => {
    const formatAddress = endereco.filter((e) => e.id !== data);
    setEndereco(formatAddress);
  };

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@token");
      const cart = JSON.parse(localStorage.getItem("@cart")!);

      if (cart) {
        setCarrinho(cart);
      }

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
        produtos,
        setProdutos,
        carrinho,
        setCarrinho,
        addProduct,
        comentarios,
        setComentarios,
        addComment,
        editProfile,
        endereco,
        setEndereco,
        deleteAddress,
        editAddress,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
