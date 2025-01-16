import styles from "./ProfilePage.module.css";
import Header from "../../Components/Header/Header";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <h1 className={styles.h1}>Eu sou o profile</h1>
    </>
  );
};

export default ProfilePage;
