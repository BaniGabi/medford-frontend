import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import AddProductMain from "../components/products/AddProductsMain";
const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header title={"New Order"} />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
