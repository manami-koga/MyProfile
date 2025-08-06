import { useRoutes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useRouter } from "next/router"

const UserList = () => {
   
    return (
        <>
            <Header />
            <h1>ユーザ一覧の画面です</h1>
            
            <Footer />
        </>
    )
}

export default UserList;