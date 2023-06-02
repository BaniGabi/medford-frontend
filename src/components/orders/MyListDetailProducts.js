import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyListDetailProducts = ({ cartItems, totalCartPrice }) => {
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Drug</th>
          <th style={{ width: "10%" }}>Brand</th>
          <th style={{ width: "10%" }}>Qty</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Unit Price + Qty</th>
        </tr>
      </thead>
      <tbody>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <tr key={item._id}>
              <td>
                <b>{item.product.drugName}</b>
              </td>
              <td>{item.product.manufacturer}</td>
              <td>{item.quantity}</td>
              <td>₦{item.product.price}</td>
              <td>₦{item.product.price * item.quantity}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Cart is empty</td>
          </tr>
        )}
        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Shipping cost:</dt> <dd>₦0</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand total:</dt>
                <dd>
                  <b className="h5">₦{totalCartPrice}</b>
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyListDetailProducts;
