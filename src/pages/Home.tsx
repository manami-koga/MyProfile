import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "../styles/main.module.css"
import { HomeContent } from "./components/HomeContent";

const Home = () => {
    
    return (
        <div className={styles.wrapper}>
            <Header name="ホーム画面" />
            <HomeContent />
            <Footer />
        </div>

    )
}

export default Home;