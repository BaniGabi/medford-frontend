import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchProducts } from "../../network/api";

const MainProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        console.log("Error fetching products:", fetchedProducts);
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="content-main">
      <ToastContainer />
      <div className="content-header">
        <h2 className="content-title">Products</h2>

        <div>
          <Link to="/addproduct" className="btn btn-outline-primary">
            <i className="fas fa-pen"></i>
            Upload a list of products
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-6 col-md-3">
              <h6>Shop by Manufacturers</h6>
              <select className="form-select">
                <option>pfizer</option>
                <option>Novartis</option>
                <option>Mazor</option>
                <option>Roche</option>
              </select>
            </div>
            <div className="col-lg-4 col-6 col-md-3">
              <h6>Shop by category</h6>
              <select className="form-select" placeholder="Shop by category">
                <option>Anti Diabetic</option>
                <option>Anti Biotic</option>
                <option>Anti Fatigue</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          <div className="row">
            {/* Products */}
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
