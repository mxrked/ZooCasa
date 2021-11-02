import MSearchFieldMain from "../search-field/MSearchFieldMain";
import MobileNavL from "./MobileNavL";
import MobileNavR from "./MobileNavR";

const MobileNavMain = () => {
  return (
    <div id="mobileNavMain">
      <div className="container-fluid mobile-nav-main-box">
        <div className="row mobile-nav-main-row">
          <MobileNavL />
          <MobileNavR />
        </div>

        {/* Mobile Search */}
        <MSearchFieldMain />
      </div>
    </div>
  );
};

export default MobileNavMain;
