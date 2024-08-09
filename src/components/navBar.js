import {
  faBarsStaggered,
  faShoppingCart,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SideBar from "./sideBar";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <>
      <div className="nav-bar">
        <a href="/">
          <h2>Shoppie</h2>
        </a>
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" && "active"}>
            Home
          </Link>
          <Link
            to="/cart"
            className={location.pathname === "/cart" && "active"}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Link>
        </div>
        <div className="side-icon" onClick={() => setShowSideBar(!showSideBar)}>
          {showSideBar ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} />
          )}
        </div>
      </div>
      {showSideBar && <SideBar close={closeSideBar} />}
    </>
  );
};

export default NavBar;
