import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import Product from "./components/product/Product"

const ProductListScreen = () => {
    return (
        <>
            <Header name="成果物一覧"/>
            <Product/>
            <Footer />
        </>
    )
}

export default ProductListScreen;