import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartDataService from "../../services/cart.services";
import UsersDataService from "../../services/users.services";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../utils/MyDocument";

const CreateProductTable = ({ fetchProducts }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const currentUser = await UsersDataService.getCurrentUser();
      const response = await CartDataService.getCart(currentUser);
      const cart = response.data;

      setCartItems(cart);
      calculateTotalPrice(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const calculateTotalPrice = (cart) => {
    let total = 0;

    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    setTotalCartPrice(total);
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await CartDataService.deleteCart(productId);
      toast.warning("You removed that product from the list");
      fetchCart();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const handleMakeOrder = () => {
    // Handle the action for making an order
    // This can be done by redirecting to a checkout page or submitting the order data to a server endpoint
  };

  return (
    <div className="col-md-12 col-lg-12">
      <div className="table-container">
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div className="row item-row" key={item._id}>
                <div className="col-md-6 col-lg-6">{item.product.drugName}</div>
                <div className="col-md-2 col-lg-2">{item.quantity}</div>
                <div className="col-md-2 col-lg-2">
                  ₦{item.product.price * item.quantity}
                </div>
                <div className="col-md-2 col-lg-2 text-end">
                  <Link
                    to="#"
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(item._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-cart">Your list is empty</div>
        )}

        {cartItems.length > 0 && (
          <div className="sticky-footer">
            <div className="row cart-summary">
              <div className="col-md-4 col-lg-4">
                <b>Total Amount:</b>
              </div>
              <div className="col-md-3 col-lg-3" style={{ fontSize: 20 }}>
                <b>₦{totalCartPrice}</b>
              </div>
              <div className="col-md-5 col-lg-5 text-end">
                <div className="d-flex align-items-center justify-content-end">
                  <PDFDownloadLink
                    document={
                      <MyDocument
                        cartItems={cartItems}
                        totalCartPrice={totalCartPrice}
                      />
                    }
                    fileName="cart_summary.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Loading..."
                      ) : (
                        <button
                          className="btn "
                          style={{ backgroundColor: "#FF6C6C" }}
                        >
                          Download PDF
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                  <NavLink
                    className="btn  ms-2"
                    to="/myList"
                    style={{ backgroundColor: "#2269ff" }}
                  >
                    Make Order
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProductTable;
