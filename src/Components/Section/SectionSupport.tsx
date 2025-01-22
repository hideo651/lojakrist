import styles from "./SectionSupport.module.css";
import { CiCreditCard2 } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";

const SectionSupport = () => {
  return (
    <section>
      <ul className={styles.iconsList}>
        <li>
          <LiaShippingFastSolid size={40} />
          <h3>Frete grátis</h3>
          <p>Frete grátis para compras cima de R$ 150,00</p>
        </li>
        <li>
          <MdCurrencyExchange size={40} />
          <h3>Devolução garantida</h3>
          <p>Devolução de roupa em até 7 dias.</p>
        </li>
        <li>
          <FiHeadphones size={40} />
          <h3>Suporte online</h3>
          <p>Suporte 24h, 7 dias por semana</p>
        </li>
        <li>
          <CiCreditCard2 size={40} />
          <h3>Pagamento flexivel</h3>
          <p>Aceitamos todos os tipos de pagamento</p>
        </li>
      </ul>
    </section>
  );
};

export default SectionSupport;
