import { fetchProductById } from "./api";
import { useState, useEffect } from "react";

export const GetProduct = (productId) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        console.log("Error fetching products:", fetchedProduct);
        setProducts(fetchedProduct);
        console.log(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
};
