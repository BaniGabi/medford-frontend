import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../orders/addCartFunction";

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <section className="content-main">
      <ToastContainer />

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="row">
            {product ? (
              <div>
                <div class="card mb-3" style={{ marginRight: +"em" }}>
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src={product.image} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.description}</p>
                        <p class="card-text">
                          <small class="text-muted">
                            Price: ${product.price}
                          </small>
                        </p>
                      </div>
                      <div class="col-md-4">
                        <button
                          onClick={() => addToCart(product)}
                          className="btn btn-sm btn-outline-success p-2 pb-3 col-lg-12 col-md-6"
                        >
                          Add to my list
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Product not found</p>
            )}
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

export default ProductDetail;
