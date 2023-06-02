import React, { useEffect, useState } from "react";
import CartDataService from "../../services/cart.services";
import EmailNotification from "../../services/email.notification";
import UsersDataService from "../../services/users.services";
import MyListDetailInfo from "./MyListDetailInfo";
import MyListDetailProducts from "./MyListDetailProducts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MyListDetailMain = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const navigate = useNavigate();

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
  const sendOrderEmail = () => {
    // Send the email using SendGrid
    const message = {
      to: [
        "habibou997@gmail.com",
        "banigabi2023@gmail.com",
        "alex.zanbi@meltwater.org",
        "adamu.muhammad@meltwater.org",
      ],
      from: {
        name: "medford",
        email: "banigabi2023@gmail.com",
      },
      subject: "New Order",
      text: "You have received a new order from Gamu Hospital",
      html: `<h1 style="color: #fff;">You have received a new order </h1>
      <p>Please find the list below:</p> `,
      attachments: [
        {
          path: "/path/to/file.pdf", // Replace with the actual path of the file
        },
      ],
    };
    EmailNotification.sendEmail(message)
      .then((response) => {
        console.log("Email sent ...", message);
        alert("Order has been sent");
        navigate("/");
        // Handle success or display a notification to the user
      })
      .catch((err) => {
        console.log(err);
        // Handle error or display an error message to the user
      });
  };
  return (
    <section className="content-main">
      <div className="card">
        <div className="card-body">
          {/* Order info */}
          <MyListDetailInfo />
          <div className="row">
            <div className="col-lg-9">
              <div className="table-responsive">
                <MyListDetailProducts
                  cartItems={cartItems}
                  totalCartPrice={totalCartPrice}
                />
              </div>
            </div>
            {/* Payment Info */}
            <div className="col-lg-3">
              <div className="box shadow-sm bg-light">
                <button
                  className="btn btn-primary col-12"
                  onClick={sendOrderEmail}
                >
                  Confirm the order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyListDetailMain;
