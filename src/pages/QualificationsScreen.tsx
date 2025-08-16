import { TitleType } from "@/types/Title"
import styles from "../styles/main.module.css"
import buttonStyles from "../styles/buttonStyles.module.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Qualifications from "./components/Qualifications"

const QualificationsScreen = (props: TitleType) => {
    return (
        <div className={styles.wrapper}>
            <Header name="資格取得一覧 " />
            <Qualifications  />
            <div className={buttonStyles.button}>
                <a href="/Home" className="btn">ホームに戻る</a>
            </div>
            <Footer />
        </div>
    )
}

export default QualificationsScreen;