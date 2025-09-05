// import { TitleType } from "@/types/Title";
import HomeButton from "@/components/parts/HomeButton";
import styles from "@/styles/main.module.css";
// import buttonStyles from "../styles/buttonStyles.module.css"
import Qualifications from "./Qualifications";
import { Header } from "@/components/parts/Header";
import { Footer } from "@/components/parts/Footer";

const QualificationsScreen = (/**props: TitleType*/) => {
  return (
    <div className={styles.wrapper}>
      <Header name="資格取得一覧 " />
      <Qualifications />
      <HomeButton />
      <Footer />
    </div>
  );
};

export default QualificationsScreen;
