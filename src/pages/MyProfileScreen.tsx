import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import MyProfile from "./components/MyProfile";
import styles from "../styles/main.module.css";
// import buttonStyles from "../styles/buttonStyles.module.css"
import HomeButton from "./components/HomeButton";

const MyProfileScreen = () => {
  return (
    <div className={styles.wrapper}>
      <Header name="ユーザ紹介" />
      <MyProfile
        name="M.K"
        birthday="9/26"
        interest={["旅行", "舞台鑑賞", "ピクニック", "友人と話すこと"]}
        weakPoint={["人混み", "バレーボール", "しいたけ"]}
      />
      <HomeButton />
      <Footer />
    </div>
  );
};

export default MyProfileScreen;
