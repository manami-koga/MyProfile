import Image from "next/image"
import IMG_6114 from "../../public/Images/IMG_6114.png"
import loadingImg from "../../public/Images/221027_mobilephone2.png"
import styles from "../styles/main.module.css"
import buttonStyles from "../styles/buttonStyles.module.css"
import { useRouter } from "next/router"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState } from "react"

const Login = () => {
    const route = useRouter();
    const [loading, setLoading] = useState(false);

    //画面遷移
    const onClick = () => {
        setLoading(true); // 画像を表示
        setTimeout(() => {
            setLoading(false); // 5秒後に非表示
            route.push("/Home");
        }, 4000);
    }

    return (
        <div className={styles.wrapper}>
            {loading ? (
                <div className={styles.loadingImgDiv}>
                    <Image src={loadingImg} alt="ロード画像" className={styles.loadingImg}/>
                    <p>読み込み中...</p>
                </div>
            ) :
                <>
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
                </>
            }
        </div>
    )
}

export default Login;