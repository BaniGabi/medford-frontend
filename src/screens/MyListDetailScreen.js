import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MyListDetailMain from "../components/orders/MyListDetailMain";

const MyListDetailScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header title={"Invoices"} />
        <MyListDetailMain />
      </main>
    </>
  );
};

export default MyListDetailScreen;
