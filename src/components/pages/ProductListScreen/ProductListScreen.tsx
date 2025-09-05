import { Header } from "@/components/parts/Header";
import { Footer } from "@/components/parts/Footer";
import Product from "./Product";

const ProductListScreen = () => {
  return (
    <>
      <Header name="成果物一覧" />
      <Product />
      <Footer />
    </>
  );
};

export default ProductListScreen;
