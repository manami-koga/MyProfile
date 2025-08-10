import { useRouter } from "next/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import image0 from "../../public/Images/image0.png"
import Image from "next/image"
import styles from "../styles/main.module.css"

const Home = () => {
    const route = useRouter();

    //Top画面に遷移
    const onClickTop = () => {
        route.push("/Top");
    }

    //プロフィール画面に遷移
    const onClickMyProfile = () => {
        route.push("/MyProfileScreen")
    }

    //成果物一覧に遷移
    const onClickProductList = () => {
        route.push("/ProductList");
    }

    //資格一覧画面に遷移
    const onClickQualifications = () => {
        route.push("/QualificationsScreen")
    }

    return (

        <div className={styles.wrapper}>
            <Header name="ホーム画面" />
            <button onClick={onClickMyProfile} className={`${styles.btn} ${styles.btnMalformation} ${styles.btnMalformationPastel}`}>プロフィールへ</button>
            <button onClick={onClickTop} className={`${styles.btn} ${styles.btnMalformation} ${styles.btnMalformationPastel}`}>Top画面に戻る</button>
            <button onClick={onClickQualifications} className={`${styles.btn} ${styles.btnMalformation} ${styles.btnMalformationPastel}`}>資格取得一覧へ</button>
            <button onClick={onClickProductList} className={`${styles.btn} ${styles.btnMalformation} ${styles.btnMalformationPastel}`}>成果物一覧</button>
            <Footer />
        </div>

    )
}

export default Home;