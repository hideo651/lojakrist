import styles from "./ShopPage.module.css";
import Header from "../../Components/Header/Header";
import SectionProducts from "../../Components/Section/SectionProducts";
import FilterCategory from "../../Components/Filter/FilterCategory";

const ShopPage = () => {
  return (
    <>
      <Header />

      <main className={`${styles.section} container`}>
        <div className={styles.filtros}>
          <FilterCategory />
        </div>
        <SectionProducts />
      </main>
    </>
  );
};

export default ShopPage;
