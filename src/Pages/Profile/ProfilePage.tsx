import styles from "./ProfilePage.module.css";
import Header from "../../Components/Header/Header";
import React from "react";
import Button from "../../Components/Button/Button";

const ProfilePage = () => {
  const [click, setClck] = React.useState(false);

  const handleClick = () => {
    setClck(!click);
    console.log("teste");
  };

  console.log(click);
  return (
    <>
      <Header />
      <main className="container">
        <h1 className={styles.h1}>Eu sou o profile</h1>
        <div className={click ? styles.teste : styles.nada}>
          <h1>OLÁ MUNDO</h1>
        </div>

        <Button onClick={handleClick}>Clique aqui</Button>
      </main>
    </>
  );
};

export default ProfilePage;
