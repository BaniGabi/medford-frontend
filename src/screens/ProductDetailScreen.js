import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProductDetail from "../components/products/ProductDetail";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../network/api";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ProductDetail product={product} />
      </main>
    </>
  );
};
export default ProductDetailScreen;
