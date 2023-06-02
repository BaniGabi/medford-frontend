import React from "react";
import Orders from "./Orders";

const OrderMain = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">All your Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <Orders />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
