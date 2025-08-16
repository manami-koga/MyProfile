import image0 from "../../../public/Images/image0.png"
import Image from "next/image"
import styles from "../../styles/main.module.css"
import profile from "../../styles/profile.module.css"
import { ProfileType } from "@/types/ProfileType";

const MyProfile = (props: ProfileType) => {
    const { name, birthday, interest, weakPoint } = props;

    return (
        <div className={profile.profileWrapper}>
            <div className={profile.card}>
                <Image src={image0} alt="プロフィール画像" className={profile.profileImage} />
                <h1 className={profile.name}> {name}</h1>

                <div className={styles.field}>
                    <label className={profile.label}>誕生日</label>
                    <div className={profile.content}>
                        {birthday}
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={profile.label}>好きなこと</label>
                    <div className={profile.content}>
                        {Array.isArray(interest) ? interest.join(",") : interest}
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={profile.label}>苦手なこと</label>
                    <div className={profile.content}>
                        {Array.isArray(weakPoint) ? weakPoint.join(",") : weakPoint}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyProfile;