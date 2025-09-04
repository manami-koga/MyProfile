import buttonStyles from "../../styles/buttonStyles.module.css"
import Link from 'next/link';

const HomeButton = () => {
    return (
        <div className={buttonStyles.button}>
            <Link href="/Home/">Home</Link>
        </div>
    )
}

export default HomeButton;