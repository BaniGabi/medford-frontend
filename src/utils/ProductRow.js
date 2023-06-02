import React from "react";
import { toast } from "react-toastify";
import CartDataService from "../services/cart.services";

const ProductRow = ({ image, name, description, price, productId }) => {
  const handleAddToCart = async () => {
    try {
      // Make an API request to add the product to the cart
      const cart = await CartDataService.addToCart(productId);
      // Show a success toast notification
      toast.success("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={image} alt={name} height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>{name}</h4>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <div className="col-md-2 product-price">
        {price}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductRow;
