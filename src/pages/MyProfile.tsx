import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import image0 from "../../public/Images/image0.png"
import Image from "next/image"
import styles from "../styles/main.module.css"
import { ProfileType } from "@/types/ProfileType";

const MyProfile=(Props:ProfileType)=>{
    return(
        <>
        <Header/>
        <h1>ユーザ紹介</h1>
        <div className={styles.card}>
        <Image src={image0} alt="プロフィール画像" className={styles.profileImage}/>
        <h1></h1>{/**名前 */}
        <p></p>{/**生年月日 */}
        <p></p>{/**趣味：マップ関数 */}
        </div>
        <Footer/>
        </>
    )
}
export default MyProfile;