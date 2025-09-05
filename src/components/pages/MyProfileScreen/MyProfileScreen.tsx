import { Header } from "@/components/parts/Header";
import styles from "@/styles/main.module.css";
import MyProfile from "./MyProfile";
import HomeButton from "@/components/parts/HomeButton";
import { Footer } from "@/components/parts/Footer";
// import buttonStyles from "../styles/buttonStyles.module.css"

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
