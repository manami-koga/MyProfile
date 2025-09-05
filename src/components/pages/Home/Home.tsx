import { Header } from "@/components/parts/Header";
import { HomeContent } from "./HomeContent";
import { Footer } from "@/components/parts/Footer";
import styles from "@/styles/main.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header name="ホーム" />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
