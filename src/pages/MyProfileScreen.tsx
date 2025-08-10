import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import MyProfile from "./components/MyProfile"
import styles from "../styles/main.module.css"

const MyProfileScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Header name="ユーザ紹介" />
            <MyProfile name="M.K" birthday="2002/09/26" interest={["旅行", "舞台鑑賞", "ピクニック", "友人と話すこと"]} weakPoint={["人混み", "バレーボール", "しいたけ"]} />
            <div className={styles.button}>
                <a href="/Home" className="btn">ホームに戻る</a>
            </div>
            <Footer />
        </div>
    )
}

export default MyProfileScreen;