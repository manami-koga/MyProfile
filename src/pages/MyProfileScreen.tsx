import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import MyProfile from "./components/MyProfile"

const MyProfileScreen = () => {
    return (
        <>
            <Header name="ユーザ紹介" />
            <MyProfile name="M.K" birthday="2002/09/26" interest={["旅行", "舞台鑑賞", "ピクニック"]} />
            <Footer />
        </>
    )
}

export default MyProfileScreen;