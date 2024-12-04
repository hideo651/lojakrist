import React from "react";

interface IUiContext {
  contagem: number;
  setContagem: React.Dispatch<React.SetStateAction<number>>;
}

const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [contagem, setContagem] = React.useState(0);

  return (
    <UiContext.Provider value={{ contagem, setContagem }}>
      {children}
    </UiContext.Provider>
  );
};
