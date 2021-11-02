import FooterL from "./sides/FooterL";
import FooterM from "./sides/FooterM";
import FooterR from "./sides/FooterR";

const FooterMain = () => {
  return (
    <footer id="footerMain">
      <div className="container-fluid footer-main-box">
        <div className="row footer-main-row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-main-side"
            id="footerLeft"
          >
            <FooterL />
          </div>
          <div
            className="col-lg-5 col-md-5 col-sm-12 col-xs-12 footer-main-side"
            id="footerMiddle"
          >
            <FooterM />
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-main-side"
            id="footerRight"
          >
            <FooterR />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
