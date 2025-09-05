import Image from "next/image";
import ProfileImg from "../../../public/Images/top.png";
import { usePageNavigation } from "@/hooks/usePageNavigation";
import profile from "../../styles/profile.module.css";
import studyImg from "../../../public/Images/study.png";
import styles from "../../styles/main.module.css";
// import top from "../../public/Images/top.png"
import product from "../../../public/Images/Product.png";
import frendsImg from "../../../public/Images/friend_Illustration_0.png";

export const HomeContent = () => {
  const { onClickMyProfile, onClickProductList, onClickQualifications } =
    usePageNavigation();
  return (
    <>
      <div className={styles.text}>
        <div className={styles.fuwafuwa}>
          <Image
            className={profile.profileImage}
            src={frendsImg}
            alt="最初の画像"
          />
        </div>
        <h1>ようこそ！</h1>
        <h1>M.Kの自己紹介サイトへ</h1>
      </div>

      <div className={`${profile.card} ${profile.honeyCard}`}>
        <h1 className={profile.cardTitle}>Profile</h1>
        <p className={profile.cardSubtitle}>- わたしについて -</p>

        <div className={profile.heartWrapper}>
          <Image
            className={profile.profileImage}
            src={ProfileImg}
            alt="プロフィール画像"
          />
          <div className={profile.stars}>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <p className={profile.cardDescription}>
          好きなことや苦手なことが
          <br />
          書いてあります
        </p>
        <button
          className="btn btn-secondary btn-home"
          onClick={onClickMyProfile}
        >
          プロフィールへ
        </button>
      </div>

      <div className={`${profile.card} ${profile.honeyCard}`}>
        <h1 className={profile.cardTitle}>Qualifications</h1>
        <p className={profile.cardSubtitle}>-持っている資格一覧-</p>
        <div className={profile.heartWrapper}>
          <Image
            className={profile.profileImage}
            src={studyImg}
            alt="資格取得一覧へ遷移するアイコン"
          />
          <div className={profile.stars}>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <p className={profile.cardDescription}>
          医療系：2種類 <br /> 情報系：1種類 <br /> その他：4種類
        </p>
        <button
          className="btn btn-secondary btn-home"
          onClick={onClickQualifications}
        >
          資格一覧へ
        </button>
      </div>

      <div className={`${profile.card} ${profile.honeyCard}`}>
        <h1 className={profile.cardTitle}>ProductList</h1>
        <p className={profile.cardSubtitle}>-これまでの成果物-</p>
        <div className={profile.heartWrapper}>
          <Image
            className={profile.profileImage}
            src={product}
            alt="成果物一覧へ遷移するアイコン"
          />
          <div className={profile.stars}>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <p className={profile.cardDescription}>
          今までに作成した成果物や、
          <br />
          制作中の成果物を確認できます
        </p>
        <button
          className="btn btn-secondary btn-home"
          onClick={onClickProductList}
        >
          成果物一覧へ
        </button>
      </div>
    </>
  );
};
