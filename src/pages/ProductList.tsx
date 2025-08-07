import { useRoutes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useRouter } from "next/router"

const ProductList = () => {
   
    return (
        <>
            <Header name="成果物一覧"/>
            
            <Footer />
        </>
    )
}

export default ProductList;