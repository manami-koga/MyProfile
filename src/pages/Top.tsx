import Image from "next/image"
import IMG_6114 from "../../public/Images/IMG_6114.png"
import styles from "../styles/main.module.css"
import buttonStyles from "../styles/buttonStyles.module.css"
import { useRouter } from "next/router"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const Top = () => {
    const route = useRouter();
    //画面遷移
    const onClick = () => {
        route.push("/Home");
    }
    return (
        <div className={styles.wrapper}>
            <Header name="ユーザ紹介サイト" />
            <div className={styles.inputTop}>

                <div className={styles.contentWrapper}>
                    <Image src={IMG_6114} alt="トップ画面の画像" className={styles.img} />
                    <button
                        onClick={onClick}
                        className={`${buttonStyles.btn} ${buttonStyles.btnMalformation} ${buttonStyles.btnMalformationPastel}`}
                    >
                        ホーム画面へ
                    </button>
                </div>

               
            </div>
             <Footer />
        </div>
    )
}

export default Top;