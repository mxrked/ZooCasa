import { Component } from "react";
import { FaChevronUp } from "react-icons/fa";

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.b2Top = this.b2Top.bind(this);
  }

  b2Top() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    function checkingB2TopScroll() {
      if (window.scrollY > 0) {
        document.getElementById("backToTopBtn").style.bottom = "40px";
      } else if (window.scrollY < 100) {
        document.getElementById("backToTopBtn").style.bottom = "-100px";
      }
    }

    checkingB2TopScroll();

    window.addEventListener("scroll", checkingB2TopScroll);
  }

  render() {
    return (
      <button
        id="backToTopBtn"
        className="page-transition"
        onClick={this.b2Top}
      >
        <FaChevronUp />
      </button>
    );
  }
}

export default BackToTop;
