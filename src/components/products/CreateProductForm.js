import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersDataService from "../../services/users.services";
import Select from "react-select";
import products from "../../data/Products";
import CartDataService from "../../services/cart.services";

const AddToCartForm = ({ fetchProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");

  const handleAddToCart = async () => {
    try {
      const currentUser = await UsersDataService.getCurrentUser();
      //console.log(currentUser);

      if (!currentUser) {
        console.log("Current User doesn't exist !");
        return;
      }

      if (!selectedProduct) {
        console.log("No product selected!");
        return;
      }

      // Replace the following code with your logic to add the product to the cart
      const cartItem = {
        product: selectedProduct.value,
        quantity,
        user: currentUser,
      };

      await CartDataService.addToCart(cartItem);
      toast.success("Product added to cart successfully");

      setSelectedProduct(null);
      setQuantity("");

      // Update the products list by calling the fetchProducts function
      fetchProducts();
    } catch (error) {
      console.error("Error getting current user:", error);
    }
  };

  // Transform the products data into the desired format
  const productOptions = products.map((product) => ({
    value: product,
    image: product.image,
    label: product.drugName,
    brand: product.manufacturer,
    price: product.price,
  }));

  return (
    <div className="col-md-12 col-lg-12">
      <form>
        <div className="mb-4">
          <label htmlFor="product" className="form-label">
            Find drug Here
          </label>
          <Select
            id="product"
            options={productOptions}
            value={selectedProduct}
            onChange={(selectedOption) => setSelectedProduct(selectedOption)}
            placeholder="Select a product"
            getOptionLabel={(option) => (
              <div className="row product">
                <div className="col-md-2">
                  <img src={option.image} alt="image" height="50" />
                </div>
                <div className="col-md-6 product-detail">
                  <h6>{option.label}</h6>
                </div>
                <div className="col-md-2 product-detail">{option.brand}</div>
                <div className="col-md-2 product-price">
                  <span style={{ color: "blue", fontSize: 17 }}>
                    ₦{option.price}
                  </span>
                </div>
              </div>
            )}
          />
        </div>
        <div className="mb-4 col-md-4 col-lg-2">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            id="quantity"
            min="1"
            max="20"
            type="number"
            placeholder="1"
            className="form-control py-2"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="d-grid ">
          <button
            type="submit"
            className="btn btn-info py-3"
            style={{ backgroundColor: "#2269FF", color: "white" }}
            onClick={handleAddToCart}
            disabled={!selectedProduct}
          >
            Add to your list
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToCartForm;
