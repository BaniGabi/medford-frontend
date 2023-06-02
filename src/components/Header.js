import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const Header = ({ title }) => {
  useEffect(() => {
    const handleOffcanvasClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const offcanvas_id = e.currentTarget.getAttribute("data-trigger");
      $(offcanvas_id).toggleClass("show");
    };

    const handleMinimizeClick = () => {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        $("body").toggleClass("aside-mini");
      }
    };

    $("[data-trigger]").on("click", handleOffcanvasClick);
    $(".btn-aside-minimize").on("click", handleMinimizeClick);

    return () => {
      $("[data-trigger]").off("click", handleOffcanvasClick);
      $(".btn-aside-minimize").off("click", handleMinimizeClick);
    };
  }, []);

  return (
    <header className="main-header navbar ">
      <div className="content-header">
        <h2 className="content-title"> {title} </h2>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link
              className={`nav-link btn-icon `}
              title="Dark mode"
              to="#"
            ></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#"></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              English
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                className="img-xs rounded-circle"
                src="/images/favicon.png"
                alt="User"
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My profile
              </Link>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
              <Link className="dropdown-item text-danger" to="#">
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
