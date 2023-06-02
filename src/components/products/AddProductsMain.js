import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import CreateProductForm from "./CreateProductForm";
import CreateProductTable from "./CreateProductTable";
import DrugsDataService from "../../services/drugs.services";

const AddProductMain = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    DrugsDataService.getAll()
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="content-main">
        <div className="content-header">
          <h4 className="content-title">Create your drugs List here</h4>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                {/* Create product form */}
                <CreateProductForm fetchProducts={fetchProducts} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                {/* Product table */}
                <CreateProductTable
                  products={products}
                  fetchProducts={fetchProducts}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProductMain;
