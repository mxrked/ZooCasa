import { Link } from "react-router-dom";

const ExhibitsTicketsMain = () => {
  return (
    <div id="exhibitsTicketsMain">
      <div
        className="exhibits-tickets-fade-holder aos-fade"
        data-aos="fade-in"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        <div
          className="exhibits-tickets-main-box lazyload"
          data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/tickets/exhibits-tickets-bg.jpg"
          aria-label="Exhibits Tickets Main Background."
        >
          <div className="exhibits-tickets-main-text">
            <div>
              <h2>Grab your tickets now.</h2>

              <span className="page-transition">buy tickets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitsTicketsMain;
