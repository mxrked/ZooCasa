import { Link } from "react-router-dom";

const IndexAboutR = () => {
  return (
    <div
      className="col-lg-7 col-md-7 col-sm-12 col-xs-12 index-about-main-side section-transition"
      id="indexAboutR"
    >
      <div
        className="index-about-main-side-cnt aos-fade"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        <div className="index-about-main-side-cnt-text">
          <h2>Our Background</h2>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>

          <div className="index-about-main-side-cnt-text-link-holder">
            <Link to="/about" className="page-transition">
              learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexAboutR;
