import image0 from "../../../public/Images/image0.png"
import Image from "next/image"
import styles from "../../styles/main.module.css"
import { ProfileType } from "@/types/ProfileType";

const MyProfile=(props:ProfileType)=>{
    const {name,birthday,interest} = props;
    
    return(
        <>
        <div className={styles.card}>
        <Image src={image0} alt="プロフィール画像" className={styles.profileImage}/>
        <h1> {name}</h1>
        <p>{birthday}</p>
        {interest?.map((interest,index)=>(
        <div key={index}>
        <p>{interest}</p>
        </div>)
        )}
        </div>
        </>
    )
}
export default MyProfile;