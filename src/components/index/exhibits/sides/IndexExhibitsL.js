import { Link } from "react-router-dom";

const IndexExhibitsL = () => {
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 index-exhibits-main-side section-transition"
      id="indexExhibitsL"
    >
      <div
        className="index-exhibits-main-side-cnt aos-fade"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div className="index-exhibits-main-side-cnt-inner">
          <h2>
            Turn your trip <br /> into an adventure
          </h2>

          {/* 
          <div className="index-exhibits-main-side-cnt-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        */}

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </p>

          <div className="index-exhibits-main-side-cnt-link-holder">
            <Link to="/exhibits#g0" className="page-transition">
              view all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexExhibitsL;
