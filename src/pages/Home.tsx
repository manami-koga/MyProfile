import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeContent } from "../components/home/HomeContent";
import styles from "../styles/main.module.css"

const Home = () => {
    
    return (
        <div className={styles.wrapper}>
            <Header name="ホーム" />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home;