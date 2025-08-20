import { useRouter } from "next/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "../styles/main.module.css"
import buttonStyles from "../styles/buttonStyles.module.css";
import imageStyles from "../styles/image.module.css"
import animStyles from "../styles/animStyles.module.css"
import image111 from "../../public/Images/111.png"
import image107 from "../../public/Images/107.png"
import image36 from "../../public/Images/36.png"
import image99 from "../../public/Images/099.png"
import Image from "next/image";
import { usePageNavigation } from "@/hooks/usePageNavigation";

const Home = () => {
    const { onClickTop, onClickMyProfile, onClickProductList, onClickQualifications } = usePageNavigation();
   
    return (
        <div className={styles.wrapper}>
            <Header name="ホーム画面" />

            <div className={`${styles.contentWrapper} ${animStyles.anim_box}`}>
                <Image className={imageStyles.icon} src={image111} alt="プロフィールへ遷移するアイコン" />
                <button onClick={onClickMyProfile} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>プロフィールへ</button>
            </div>

            <div className={styles.contentWrapper}>
                <button onClick={onClickProductList} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>成果物一覧</button>
                <Image className={imageStyles.icon} src={image36} alt="成果物一覧へ遷移するアイコン" />
            </div>

            <div className={styles.contentWrapper}>
                <Image className={imageStyles.icon} src={image107} alt="資格取得一覧へ遷移するアイコン" />
                <button onClick={onClickQualifications} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>資格取得一覧へ</button>
            </div>


            <div className={styles.contentWrapper}>
                <button onClick={onClickTop} className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel} ${buttonStyles.iconLarge} ${buttonStyles.btnFontSize}`}>Top画面に戻る</button>
                <Image className={imageStyles.icon} src={image99} alt="Top画面へ戻るアイコン" />
            </div>
            <Footer />
        </div>

    )
}

export default Home;