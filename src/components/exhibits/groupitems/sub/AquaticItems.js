import { Component } from "react";

class AquaticItems extends Component {
  constructor(props) {
    super(props);

    this.createExhibitAquaticItem = this.createExhibitAquaticItem.bind(this);
  }

  createExhibitAquaticItem(props) {
    return (
      <div
        className="exhibits-group-item aquatic-item page-transition"
        id={props.exhibitsAquaticItemID}
      >
        <div
          className="exhibits-group-item-inner lazyload page-transition"
          data-bg={props.exhibitsAquaticItemBG}
          aria-label={props.exhibitsAquaticItemAria}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="row exhibit-group-items-row">
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitAquaticItem
            exhibitsAquaticItemID="exhibitAIOne"
            exhibitsAquaticItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/aquatics/aquatic-1.jpg"
            exhibitsAquaticItemAria="Aquatic One"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitAquaticItem
            exhibitsAquaticItemID="exhibitAITwo"
            exhibitsAquaticItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/aquatics/aquatic-2.jpg"
            exhibitsAquaticItemAria="Aquatic Two"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitAquaticItem
            exhibitsAquaticItemID="exhibitAIThree"
            exhibitsAquaticItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/aquatics/aquatic-3.jpg"
            exhibitsAquaticItemAria="Aquatic Three"
          />
        </div>
      </div>
    );
  }
}

export default AquaticItems;
