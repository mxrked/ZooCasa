import { Link } from "react-router-dom";

const IndexTopSlide1 = () => {
  return (
    <div>
      <div className="index-top-slide" id="indexTopSlide1">
        <div
          className="index-top-slide-bg lazyload"
          data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/index/top/i-top-slide-1.jpg"
          aria-label="Index Top Slide Background (Felines Exhibit)"
          id="indexTopSlide1BG"
        />

        <div className="index-top-slide-cnt">
          <div className="index-top-slide-cnt-inner">
            <div className="index-top-slide-text">
              <h2
                className="aos-fade"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="900"
              >
                Feel the&nbsp;
                <br />
                lion's pride.
              </h2>

              <p
                className="aos-fade"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="900"
              >
                visit the felines exhibit.
              </p>

              <div
                className="aos-fade"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="900"
              >
                <Link
                  to="/exhibits#g0"
                  className="index-top-slide-link page-transition"
                >
                  all
                </Link>

                <Link
                  to="/exhibits#g1"
                  className="index-top-slide-link page-transition"
                >
                  felines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTopSlide1;
