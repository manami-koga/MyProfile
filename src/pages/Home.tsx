import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "../styles/main.module.css"
import buttonStyles from "../styles/buttonStyles.module.css";
import imageStyles from "../styles/image.module.css"
import profileImge from "../../public/Images/profileImg.png"
import top from "../../public/Images/top.png"
import product from "../../public/Images/Product.png"
import studyImg from "../../public/Images/study.png"
import Image from "next/image";
import { usePageNavigation } from "@/hooks/usePageNavigation";

const Home = () => {
    const { onClickTop, onClickMyProfile, onClickProductList, onClickQualifications } = usePageNavigation();
   
    return (
        <div className={styles.wrapper}>
            <Header name="ホーム画面" />

            <div className={`${styles.contentWrapper}`}>
                <Image className={imageStyles.icon} src={profileImge} alt="プロフィールへ遷移するアイコン" />
                <button onClick={onClickMyProfile} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>プロフィールへ</button>
            </div>

            <div className={styles.contentWrapper}>
                <button onClick={onClickProductList} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>成果物一覧</button>
                <Image className={imageStyles.icon} src={product} alt="成果物一覧へ遷移するアイコン" />
            </div>

            <div className={styles.contentWrapper}>
                <Image className={imageStyles.icon} src={studyImg} alt="資格取得一覧へ遷移するアイコン" />
                <button onClick={onClickQualifications} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>資格取得一覧へ</button>
            </div>

            <div className={styles.contentWrapper}>
                <button onClick={onClickTop} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconTopLarge} ${buttonStyles.btnFontSize}`}>Top画面に戻る</button>
                <Image className={imageStyles.icon} src={top} alt="Top画面へ戻るアイコン" />
            </div>
            <Footer />
        </div>

    )
}

export default Home;