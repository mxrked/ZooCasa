import { Fragment } from "react";
import MenuTogglerFunc from "../../../assets/nav/menu/MenuTogglerFunc";

const MenuToggler = () => {
  return (
    <div>
      <button id="menuTogglerBtn" className="menu-toggler-btn page-transition">
        <span className="menu-toggler-span page-transition"></span>
        <span
          className="menu-toggler-span page-transition"
          id="menuTogglerS2"
        ></span>
        <span className="menu-toggler-span page-transition"></span>
      </button>

      <Fragment>
        <MenuTogglerFunc />
      </Fragment>
    </div>
  );
};

export default MenuToggler;
