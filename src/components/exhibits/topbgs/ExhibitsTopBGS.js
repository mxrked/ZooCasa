import { Component } from "react";

class ExhibitsTopBGS extends Component {
  constructor(props) {
    super(props);

    this.exhibitTopBG = this.exhibitTopBG.bind(this);
  }

  exhibitTopBG(props) {
    return (
      <div
        id={props.eTopBGId}
        className="exhibits-top-bg lazyload page-transition"
        data-bg={props.eTopBGSrc}
      />
    );
  }

  render() {
    return (
      <div id="exhibitsTopBGS">
        <this.exhibitTopBG
          eTopBGId="eTopBGOne"
          eTopBGSrc="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/top/exhibit-top-felines.jpg"
        />
        <this.exhibitTopBG
          eTopBGId="eTopBGTwo"
          eTopBGSrc="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/top/exhibit-top-primates.jpg"
        />
        <this.exhibitTopBG
          eTopBGId="eTopBGThree"
          eTopBGSrc="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/exhibits/top/exhibit-top-aquatics.jpg"
        />
      </div>
    );
  }
}

export default ExhibitsTopBGS;
