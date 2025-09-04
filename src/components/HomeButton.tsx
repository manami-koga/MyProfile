import buttonStyles from "../styles/buttonStyles.module.css"
import Link from 'next/link';

const HomeButton = () => {
    return (
        <div className={buttonStyles.button}>
          <a href="/Home" className="btn">ホームに戻る</a>
        </div>
    )
}

export default HomeButton;