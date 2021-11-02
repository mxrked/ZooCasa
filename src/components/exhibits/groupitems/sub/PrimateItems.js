import { Component } from "react";

class PrimateItems extends Component {
  constructor(props) {
    super(props);

    this.createExhibitPrimateItem = this.createExhibitPrimateItem.bind(this);
  }

  createExhibitPrimateItem(props) {
    return (
      <div
        className="exhibits-group-item primate-item page-transition"
        id={props.exhibitsPrimateItemID}
      >
        <div
          className="exhibits-group-item-inner lazyload page-transition"
          data-bg={props.exhibitsPrimateItemBG}
          aria-label={props.exhibitsPrimateItemAria}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="row exhibit-group-items-row">
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitPrimateItem
            exhibitsPrimateItemID="exhibitPIOne"
            exhibitsPrimateItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/primates/primate-1.jpg"
            exhibitsPrimateItemAria="Primate One"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitPrimateItem
            exhibitsPrimateItemID="exhibitPIOne"
            exhibitsPrimateItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/primates/primate-2.jpg"
            exhibitsPrimateItemAria="Primate Two"
          />
        </div>
        <div className="exhibit-group-item-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 page-transition">
          <this.createExhibitPrimateItem
            exhibitsPrimateItemID="exhibitPIOne"
            exhibitsPrimateItemBG="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/primates/primate-3.jpg"
            exhibitsPrimateItemAria="Primate Three"
          />
        </div>
      </div>
    );
  }
}

export default PrimateItems;
