import React, { ReactNode } from "react";
import styles from "./CardSecondary.module.css";

interface ICardSecondaryProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  img: string;
}

const CardSecondary: React.FC<ICardSecondaryProps> = ({ alt, img }) => {
  return (
    <div className={styles.cardImg}>
      <img src={img} alt={alt} />
    </div>
  );
};

export default CardSecondary;
