import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuMainFunc from "../../../assets/nav/menu/MenuMainFunc";

const MenuMain = () => {
  return (
    <div>
      <div id="menuDarken" className="full-second" />
      <div id="menuMain" className="full-second">
        <div className="page-transition" id="menuMainContent">
          <div className="menu-main-top">
            <h4>Navigation</h4>

            <button id="menuCloserBtn" className="page-transition">
              <FaTimes className="fa-icon" />
            </button>
          </div>

          <div className="menu-main-body">
            <Link to="/home" className="page-transition menu-main-link">
              Home
            </Link>
            <Link to="/about" className="page-transition menu-main-link">
              About Us
            </Link>

            <div className="menu-exhibits-holder">
              <label id="menuExhibitsLabel">Exhibits</label>

              <input type="checkbox" id="menuExhibitsCB"></input>
            </div>
            <div id="menuExhibitLinks" className="full-second">
              <Link
                to="/exhibits#g0"
                className="page-transition menu-exhibit-link"
              >
                All Exhibits
              </Link>
              <Link
                to="/exhibits#g1"
                className="page-transition menu-exhibit-link"
              >
                Felines
              </Link>
              <Link
                to="/exhibits#g2"
                className="page-transition menu-exhibit-link"
              >
                Primates
              </Link>
              <Link
                to="/exhibits#g3"
                className="page-transition menu-exhibit-link"
              >
                Aquatics
              </Link>
            </div>

            <Link to="/team" className="page-transition menu-main-link">
              Our Team
            </Link>
            <Link to="/contact" className="page-transition menu-main-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Fragment>
        <MenuMainFunc />
      </Fragment>
    </div>
  );
};

export default MenuMain;
