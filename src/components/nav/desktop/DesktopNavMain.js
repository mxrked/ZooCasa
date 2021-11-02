import DesktopNavL from "./DesktopNavL";
import DesktopNavR from "./DesktopNavR";

const DesktopNavMain = () => {
  return (
    <div id="desktopNavMain">
      <div className="desktop-nav-main-box container-fluid">
        <div className="desktop-nav-main-row row">
          <DesktopNavL />
          <DesktopNavR />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavMain;
