import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex justify-content-between">
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/medford.svg"
              style={{ height: "46" }}
              className="logo"
              alt="MedNow Logo"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink className="menu-link" to="/products">
                <i className="icon fas fa-home"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink className="menu-link" to="/addproduct">
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">New Order</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/orders">
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">My Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="/myList">
                <i className="icon fas fa-store-alt"></i>
                <span className="text">My Invoices</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
