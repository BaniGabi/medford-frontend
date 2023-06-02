import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  toast.success(`${product.name} added to cart!`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
