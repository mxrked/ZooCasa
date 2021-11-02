//* Imports
import MenuToggler from "../menu/MenuToggler";
import DSearchFieldMain from "../search-field/DSearchFieldMain";
import DSocials from "../socials/DSocials";

const DesktopNavR = () => {
  return (
    <div className="desktop-nav-main-side col-lg-8 col-md-8" id="desktopNavR">
      <div className="desktop-nav-main-side-cnt">
        <DSearchFieldMain />
        <span className="nav-border" />
        <MenuToggler />
        <span className="nav-border" />
        <DSocials />
      </div>
    </div>
  );
};

export default DesktopNavR;
