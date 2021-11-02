import { Link } from "react-router-dom";

const IndexExhibitsR = () => {
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 index-exhibits-main-side section-transition"
      id="indexExhibitsR"
    >
      <div
        className="index-exhibits-main-side-cnt aos-fade"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div className="index-exhibits-main-side-group">
          <div
            className="index-exhibits-main-side-group-bg lazyload"
            data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/groups/exhibit-1.jpg"
            aria-label="Felines Group Exhibit."
          />

          <div className="index-exhibits-main-side-group-cnt">
            <div>
              <h3>Felines</h3>

              <Link to="/exhibits#g1" className="page-transition">
                View
              </Link>
            </div>
          </div>
        </div>

        <div className="index-exhibits-main-side-group">
          <div
            className="index-exhibits-main-side-group-bg lazyload"
            data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/groups/exhibit-2.jpg"
            aria-label="Primates Group Exhibit."
          />

          <div className="index-exhibits-main-side-group-cnt">
            <div>
              <h3>Primates</h3>

              <Link to="/exhibits#g2" className="page-transition">
                View
              </Link>
            </div>
          </div>
        </div>

        <div className="index-exhibits-main-side-group">
          <div
            className="index-exhibits-main-side-group-bg lazyload"
            data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/groups/exhibit-3.jpg"
            aria-label="Aquatics Group Exhibit."
          />

          <div className="index-exhibits-main-side-group-cnt">
            <div>
              <h3>Aquatics</h3>

              <Link to="/exhibits#g3" className="page-transition">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexExhibitsR;
