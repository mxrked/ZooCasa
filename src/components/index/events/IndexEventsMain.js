import { Component } from "react";

class IndexEventsMain extends Component {
  constructor(props) {
    super(props);

    this.createIndexEvent = this.createIndexEvent.bind(this);
  }

  // This will create a new index event without having excess HTML code
  createIndexEvent(props) {
    return (
      <div className="index-event-item" id={props.itemid}>
        <div className="index-event-inner">
          <div
            className="index-event-item-bg lazyload"
            data-bg={props.itembg}
          />

          <div className="index-event-item-text">
            <h2>{props.itemheading}</h2>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut.
            </p>

            <a href="#" className="page-transition">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div id="indexEventsMain">
          <div
            className="index-events-main-top aos-fade"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <h2>Community Events</h2>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam. Sadipscing elitr.
            </p>
          </div>

          <div className="index-events-holder" id="indexEventsHolder">
            <div
              className="index-event-fade-holder aos-fade"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexEvent
                itemid="iEOne"
                itembg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/events/event-1.jpg"
                itemheading="Reptile Expansion."
              />
            </div>
            <div
              className="index-event-fade-holder aos-fade"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexEvent
                itemid="iETwo"
                itembg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/events/event-2.jpg"
                itemheading="Feeding Frenzy."
              />
            </div>
            <div
              className="index-event-fade-holder aos-fade"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexEvent
                itemid="iEThree"
                itembg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/events/event-3.jpg"
                itemheading="Petting Animals."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexEventsMain;
