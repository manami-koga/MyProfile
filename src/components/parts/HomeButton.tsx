import Link from "next/link";
import buttonStyles from "@/styles/buttonStyles.module.css";

const HomeButton = () => {
  return (
    <div className={buttonStyles.button}>
      <Link href="/Home" className="btn">
        ホームに戻る
      </Link>
    </div>
  );
};

export default HomeButton;
