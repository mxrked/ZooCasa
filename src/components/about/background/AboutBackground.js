import { Link } from "react-router-dom";

const AboutBackground = () => {
  return (
    <div id="aboutBackground">
      <div className="container-fluid about-background-box">
        <div className="row about-background-row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 about-background-side">
            <div
              className="about-background-side-cnt aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <div className="about-background-bgs">
                <div
                  className="lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/index/about/index-about-back-img.jpg"
                  aria-label="Person looking at Zoo map."
                />
                <div
                  className="lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/about/background/about-bg-img-2.jpg"
                  aria-label="Closeup on Bengal Tiger."
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 about-background-side">
            <div
              className="about-background-side-cnt aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <div className="about-background-text">
                <h2>Our Background</h2>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam.
                </p>

                <Link to="/exhibits#g0" className="page-transition">
                  view exhibits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBackground;
