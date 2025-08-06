import { useRouter } from "next/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import image0 from "../../public/Images/image0.png"
import Image from "next/image"
import styles from "../styles/main.module.css"

const Home=()=>{
     const route = useRouter();
    const onClickBack = () => {
        route.push("/Top");
    }

    const onClickUserList=()=>{
        route.push("/UserList");
        }

    return(
        <>
        <Header/>
        <h1>ホーム画面です</h1>
        <Image src={image0} alt="自己紹介アイコン" className={styles.icon}/>
        <button onClick={onClickBack}>Top画面に戻る</button>
        <button onClick={onClickUserList}>ユーザ一覧へ</button>
        <Footer/>
        </>
    )
}

export default Home;