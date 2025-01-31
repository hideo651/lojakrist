import styles from "./ProfilePage.module.css";
import Header from "../../Components/Header/Header";
import Sidenav from "../../Components/Sidenav/Sidenav";
import React from "react";

const ProfilePage = () => {
  const [showSection, setShowSection] = React.useState("usuario");
  return (
    <>
      <Header />
      <main className="container">
        <h1>Meu Perfil</h1>
        <div className={styles.profile}>
          <Sidenav showSection={showSection} setShowSection={setShowSection} />
          <div className={styles.profileInfo}>
            {showSection === "usuario" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
            {showSection === "pedidos" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
            {showSection === "carrinho" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
            {showSection === "endereço" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
            {showSection === "cartão" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
