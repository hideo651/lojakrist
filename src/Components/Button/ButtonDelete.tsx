import React, { ReactNode } from "react";
import styles from "./ButtonDelete.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonDelete: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default ButtonDelete;
