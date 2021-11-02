import { Component } from "react";
import { displayExhibitGroup } from "../../../assets/cross-page/pages/exhibits/DisplayExhibitGroup";
import { styleExhibitBtns } from "../../../assets/cross-page/pages/exhibits/StylingExhibitBtns";

class ExhibitsGroupBtns extends Component {
  constructor(props) {
    super(props);

    this.exhibitGroupBtn = this.exhibitGroupBtn.bind(this);
  }

  exhibitGroupBtn(props) {
    return (
      <button id={props.eBtnId} className="exhibit-group-btn page-transition">
        {props.eBtnTxt}
      </button>
    );
  }

  componentDidMount() {
    var i;
    const allExhibitGroupBtns = document.querySelectorAll(".exhibit-group-btn");
    const allExhibitItems = document.getElementsByClassName(
      "exhibits-group-item"
    );
    const globalURL = window.location.href;

    // This will add a hash to the url based on btn clicked
    function createExhibitBtnHash(hsh) {
      // Remove hash first
      globalURL.substr(0, window.location.href.indexOf("#"));

      setTimeout(() => {
        window.location.hash = hsh;
      }, 10);
    }

    // This will check the exhibit url and will trigger certain functions
    function checkingExhibitURL() {
      if (globalURL.indexOf("g0") > -1) {
        styleExhibitBtns(allExhibitGroupBtns[0]);
        displayExhibitGroup(allExhibitItems);
      } else if (globalURL.indexOf("g1") > -1) {
        styleExhibitBtns(allExhibitGroupBtns[1]);
        displayExhibitGroup(document.getElementsByClassName("feline-item"));
      } else if (globalURL.indexOf("g2") > -1) {
        styleExhibitBtns(allExhibitGroupBtns[2]);
        displayExhibitGroup(document.getElementsByClassName("primate-item"));
      } else if (globalURL.indexOf("g3") > -1) {
        styleExhibitBtns(allExhibitGroupBtns[3]);
        displayExhibitGroup(document.getElementsByClassName("aquatic-item"));
      }
    }
    checkingExhibitURL();

    // This will detect which exhibit group btn was clicked and will run some functions
    function detectExhibitGBtns(btn) {
      if (btn.target === allExhibitGroupBtns[0]) {
        console.log("All btn was clicked.");
        createExhibitBtnHash("g0");
        styleExhibitBtns(allExhibitGroupBtns[0]);
        displayExhibitGroup(allExhibitItems);
      } else if (btn.target === allExhibitGroupBtns[1]) {
        console.log("Felines btn was clicked.");
        createExhibitBtnHash("g1");
        styleExhibitBtns(allExhibitGroupBtns[1]);
        displayExhibitGroup(document.getElementsByClassName("feline-item"));
      } else if (btn.target === allExhibitGroupBtns[2]) {
        console.log("Primates btn was clicked.");
        createExhibitBtnHash("g2");
        styleExhibitBtns(allExhibitGroupBtns[2]);
        displayExhibitGroup(document.getElementsByClassName("primate-item"));
      } else if (btn.target === allExhibitGroupBtns[3]) {
        console.log("Aquatics btn was clicked.");
        createExhibitBtnHash("g3");
        styleExhibitBtns(allExhibitGroupBtns[3]);
        displayExhibitGroup(document.getElementsByClassName("aquatic-item"));
      }
    }

    // This will be used to change the top bg based on what btn is clicked
    function changeExhibitTopBGS(bg) {
      for (
        i = 0;
        i < document.getElementsByClassName("exhibits-top-bg").length;
        i++
      ) {
        document.getElementsByClassName("exhibits-top-bg")[i].style.opacity =
          "0";
      }

      setTimeout(() => {
        bg.style.opacity = "1";
      }, 1);
    }

    function changeExhibitTopBGSURL() {
      if (window.location.href.indexOf("g0") > -1) {
        changeExhibitTopBGS(document.getElementById("eTopBGOne"));
      } else if (window.location.href.indexOf("g1") > -1) {
        changeExhibitTopBGS(document.getElementById("eTopBGOne"));
      } else if (window.location.href.indexOf("g2") > -1) {
        changeExhibitTopBGS(document.getElementById("eTopBGTwo"));
      } else if (window.location.href.indexOf("g3") > -1) {
        changeExhibitTopBGS(document.getElementById("eTopBGThree"));
      }
    }
    changeExhibitTopBGSURL();

    window.addEventListener("load", () => {
      changeExhibitTopBGSURL();
    });

    allExhibitGroupBtns[0].addEventListener("click", (btn) => {
      detectExhibitGBtns(btn);
    });
    allExhibitGroupBtns[1].addEventListener("click", (btn) => {
      detectExhibitGBtns(btn);
      changeExhibitTopBGS(document.getElementById("eTopBGOne"));
    });
    allExhibitGroupBtns[2].addEventListener("click", (btn) => {
      detectExhibitGBtns(btn);
      changeExhibitTopBGS(document.getElementById("eTopBGTwo"));
    });
    allExhibitGroupBtns[3].addEventListener("click", (btn) => {
      detectExhibitGBtns(btn);
      changeExhibitTopBGS(document.getElementById("eTopBGThree"));
    });

    allExhibitGroupBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "#daad86";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "#dc986a";
      });
    });
  }

  render() {
    return (
      <div id="exhibitsGroupBtns">
        <div
          className="exhibits-group-btns-holder aos-fade"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <this.exhibitGroupBtn eBtnId="eBtnOne" eBtnTxt="All" />
          <this.exhibitGroupBtn eBtnId="eBtnTwo" eBtnTxt="Felines" />
          <this.exhibitGroupBtn eBtnId="eBtnThree" eBtnTxt="Primates" />
          <this.exhibitGroupBtn eBtnId="eBtnFour" eBtnTxt="Aquatics" />
        </div>
      </div>
    );
  }
}

export default ExhibitsGroupBtns;
