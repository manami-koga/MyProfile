import image0 from "../../../public/Images/image0.png"
import Image from "next/image"
import styles from "../../styles/main.module.css"
import { ProfileType } from "@/types/ProfileType";

const MyProfile = (props: ProfileType) => {
    const { name, birthday, interest, weakPoint } = props;

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.card}>
                <Image src={image0} alt="プロフィール画像" className={styles.profileImage} />
                <h1 className={styles.name}> {name}</h1>

                <div className={styles.field}>
                    <label className={styles.label}>誕生日</label>
                    <div className={styles.content}>
                        {birthday}
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>好きなこと</label>
                    <div className={styles.content}>
                        {Array.isArray(interest) ? interest.join(",") : interest}
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>苦手なこと</label>
                    <div className={styles.content}>
                        {Array.isArray(weakPoint) ? weakPoint.join(",") : weakPoint}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyProfile;