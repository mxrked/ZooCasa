import { Link } from "react-router-dom";

const AboutGoals = () => {
  return (
    <div id="aboutGoals">
      <div className="container-fluid about-goals-box">
        <div className="row about-goals-row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 order-lg-first order-md-first order-sm-last order-last about-goals-side">
            <div
              className="about-goals-side-cnt aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <div className="about-goals-text">
                <h2>Our Goals</h2>

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
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 order-lg-last order-md-last order-sm-first order-first about-goals-side">
            <div
              className="about-goals-side-cnt aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <div className="about-goals-bgs">
                <div
                  className="lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/about/background/about-bg-img-3.jpg"
                  aria-label="Closeup on a Monkey."
                />
                <div
                  className="lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/about/background/about-bg-img-4.jpg"
                  aria-label="Someone sitting at an aquarium window."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGoals;
