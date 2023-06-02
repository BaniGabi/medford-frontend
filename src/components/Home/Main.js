import React from "react";
import TopTotal from "./TopToal";
import LatestOrder from "./LatesOrder";

const Main = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> </h2>
        </div>
        {/* Top Total */}
        <TopTotal />

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder />
        </div>
      </section>
    </>
  );
};

export default Main;
