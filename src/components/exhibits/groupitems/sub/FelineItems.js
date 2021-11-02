import { Component } from "react";

class FelineItems extends Component {
  constructor(props) {
    super(props);

    this.createExhibitFelineItem = this.createExhibitFelineItem.bind(this);
  }

  createExhibitFelineItem(props) {
    return (
      <div
        className="exhibits-group-item feline-item page-transition"
        id={props.exhibitsFelineItemID}
      >
        <div
          className="exhibits-group-item-inner lazyload page-transition"
          data-bg={props.exhibitsFelineItemBG}
          aria-label={props.exhibitsFelineItemAria}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="row exhibit-group-items-row">
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitFelineItem
            exhibitsFelineItemID="exhibitFIOne"
            exhibitsFelineItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/felines/feline-1.jpg"
            exhibitsFelineItemAria="Feline One"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitFelineItem
            exhibitsFelineItemID="exhibitFITwo"
            exhibitsFelineItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/felines/feline-2.jpg"
            exhibitsFelineItemAria="Feline Two"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitFelineItem
            exhibitsFelineItemID="exhibitFIThree"
            exhibitsFelineItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/felines/feline-3.jpg"
            exhibitsFelineItemAria="Feline Three"
          />
        </div>
      </div>
    );
  }
}

export default FelineItems;
