import { ReactNode } from "react";

import styles from "./ButtonClose.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonClose: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <button className={styles.button} {...props}>
        {children}
      </button>
    </>
  );
};

export default ButtonClose;
