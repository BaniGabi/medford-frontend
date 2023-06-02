import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../orders/addCartFunction";
import { fetchProductById } from "../../network/api";

const Product = (props) => {
  const { product } = props;

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to={`/product/${product.id}/detail`}>
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <button className="btn btn-sm btn-outline-success p-2 pb-3 col-lg-12 col-md-6">
                Add to my list
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
