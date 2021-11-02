import { Link } from "react-router-dom";

const IndexTopSlide2 = () => {
  return (
    <div>
      <div className="index-top-slide" id="indexTopSlide2">
        <div
          className="index-top-slide-bg lazyload"
          data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/index/top/i-top-slide-2.jpg"
          aria-label="Index Top Slide Background (Primates Exhibit)"
          id="indexTopSlide2BG"
        />

        <div className="index-top-slide-cnt">
          <div className="index-top-slide-cnt-inner">
            <div className="index-top-slide-text">
              <h2>
                Monkey see,&nbsp;
                <br />
                Monkey do.
              </h2>

              <p>visit the primates exhibit.</p>

              <div>
                <Link
                  to="/exhibits#g0"
                  className="index-top-slide-link page-transition"
                >
                  all
                </Link>

                <Link
                  to="/exhibits#g2"
                  className="index-top-slide-link page-transition"
                >
                  primates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTopSlide2;
