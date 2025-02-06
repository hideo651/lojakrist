import React from "react";

interface IModalContext {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddAddressModalOpen: boolean;
  setIsAddAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<IModalContext | null>(null);

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};
export const ModalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] =
    React.useState(false);

  return (
    <ModalContext.Provider
      value={{
        isEditModalOpen,
        setIsEditModalOpen,
        isAddAddressModalOpen,
        setIsAddAddressModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
