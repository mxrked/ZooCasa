import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SFFilter from "../../../assets/nav/search-fields/SFFilter";
import SFReroute from "../../../assets/nav/search-fields/SFReroute";

const DSearchFieldMain = () => {
  return (
    <div>
      <div id="dSearchFieldMain">
        <div className="search-field-input-and-btn">
          <input
            type="text"
            className="page-transition search-field-input"
            autoComplete="off"
            id="dSearchFieldInput"
            placeholder="Search.."
          />

          <button
            id="dSearchFieldGo"
            className="page-transition search-field-go"
          >
            <FaSearch />
          </button>
        </div>

        <ul id="dSearchFieldLinks" className="search-field-links">
          <li className="search-field-links-li">
            <Link to="/home" className="search-field-links-a page-transition">
              Home
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link to="/about" className="search-field-links-a page-transition">
              About Us
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link
              to="/exhibits#g0"
              className="search-field-links-a page-transition"
            >
              All Exhibits
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link
              to="/exhibits#g1"
              className="search-field-links-a page-transition"
            >
              Felines
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link
              to="/exhibits#g2"
              className="search-field-links-a page-transition"
            >
              Primates
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link
              to="/exhibits#g3"
              className="search-field-links-a page-transition"
            >
              Aquatics
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link to="/team" className="search-field-links-a page-transition">
              Our Team
            </Link>
          </li>
          <li className="search-field-links-li">
            <Link
              to="/contact"
              className="search-field-links-a page-transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <Fragment>
        <SFFilter />
        <SFReroute />
      </Fragment>
    </div>
  );
};

export default DSearchFieldMain;
