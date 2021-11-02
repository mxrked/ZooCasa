import { Link } from "react-router-dom";

const IndexTopSlide3 = () => {
  return (
    <div>
      <div className="index-top-slide" id="indexTopSlide3">
        <div
          className="index-top-slide-bg lazyload"
          data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/index/top/i-top-slide-3.jpg"
          aria-label="Index Top Slide Background (Primates Aquatics)"
          id="indexTopSlide3BG"
        />

        <div className="index-top-slide-cnt">
          <div className="index-top-slide-cnt-inner">
            <div className="index-top-slide-text">
              <h2>
                Dive into&nbsp;
                <br />
                an adventure.
              </h2>

              <p>visit the aquatics exhibit.</p>

              <div>
                <Link
                  to="/exhibits#g0"
                  className="index-top-slide-link page-transition"
                >
                  all
                </Link>

                <Link
                  to="/exhibits#g3"
                  className="index-top-slide-link page-transition"
                >
                  aquatics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTopSlide3;
