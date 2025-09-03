import { TitleType } from "@/types/Title"
import styles from "../styles/main.module.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Qualifications from "./components/qualifications/Qualifications"
import HomeButton from "./components/HomeButton"

const QualificationsScreen = (props: TitleType) => {
    return (
        <div className={styles.wrapper}>
            <Header name="資格取得一覧 " />
            <Qualifications  />
            <HomeButton/>
            <Footer />
        </div>
    )
}

export default QualificationsScreen;