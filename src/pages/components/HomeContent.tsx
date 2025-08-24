import Image from "next/image"
import ProfileImg from "../../../public/Images/top.png"
import { usePageNavigation } from "@/hooks/usePageNavigation";
import profile from "../../styles/profile.module.css"
import studyImg from "../../../public/Images/study.png"
import styles from "../../styles/main.module.css"
import top from "../../public/Images/top.png"
import product from "../../../public/Images/Product.png"
import frendsImg from "../../../public/Images/friend_Illustration_0.png"

export const HomeContent = () => {
    const { onClickMyProfile, onClickProductList, onClickQualifications } = usePageNavigation();
    return (
        <>
            <div className={styles.text}>
                <div className={styles.fuwafuwa}>
                <Image className={profile.profileImage} src={frendsImg} alt="最初の画像" />
                </div>
                <h1>ようこそ！</h1>
                <h1>M.Kの自己紹介サイトへ</h1>
            </div>

            <div className={`${profile.card} ${profile.homeCard}`}>
                <h1>Profile</h1>
                <p>-わたしについて-</p>
                <Image className={profile.profileImage} src={ProfileImg} alt="プロフィール画像" />
                <p>好きなことや苦手なことが書いてあります</p>
                <button className="btn btn-secondary" onClick={onClickMyProfile}>プロフィールへ</button>
            </div>

            <div className={`${profile.card} ${profile.homeCard}`}>
                <h1>Qualifications</h1>
                <p>-持っている資格一覧-</p>
                <Image className={profile.profileImage} src={studyImg} alt="資格取得一覧へ遷移するアイコン" />
                <p>医療系：2種類 <br/> 情報系：1種類 <br/> その他：4種類</p>
                <button className="btn btn-secondary" onClick={onClickQualifications}>資格一覧へ</button>
            </div>

            <div className={`${profile.card} ${profile.homeCard}`}>
                <h1>ProductList</h1>
                <p>-これまでの成果物-</p>
                <Image className={profile.profileImage} src={product} alt="成果物一覧へ遷移するアイコン" />
                <button className="btn btn-secondary" onClick={onClickProductList}>成果物一覧へ</button>
            </div>
        </>
    )
}