import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Latest orders</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {/* Not Paid */}
            <tr>
              <td>
                <b>Gamu Hospital</b>
              </td>
              <td>gamu34@gmail.com</td>
              <td>N 0</td>
              <td>
                <span className="badge rounded-pill alert-danger">
                  Created At Today
                </span>
              </td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
