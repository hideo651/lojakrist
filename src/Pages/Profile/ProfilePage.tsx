import styles from "./ProfilePage.module.css";
import Header from "../../Components/Header/Header";
import Sidenav from "../../Components/Sidenav/Sidenav";
import React from "react";
import ProfileUser from "../../Components/Profile/ProfileUser";
import ProfileCart from "../../Components/Profile/ProfileCart";
import ProfileAddress from "../../Components/Profile/ProfileAddress";

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
            {showSection === "usuario" ? <ProfileUser /> : <></>}
            {showSection === "pedidos" ? (
              <div>
                <h1>{showSection}</h1>
              </div>
            ) : (
              <></>
            )}
            {showSection === "carrinho" ? <ProfileCart /> : <></>}
            {showSection === "endereço" ? <ProfileAddress /> : <></>}
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
