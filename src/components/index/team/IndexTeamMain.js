import { Component } from "react";
import { Link } from "react-router-dom";

class IndexTeamMain extends Component {
  constructor(props) {
    super(props);

    this.createIndexTeamMate = this.createIndexTeamMate.bind(this);
  }

  createIndexTeamMate(props) {
    return (
      <div className="index-team-main-mate aos-fade" id={props.teammateid}>
        <div className="index-team-main-mate-cnt">
          <div
            className="index-team-main-mate-bg lazyload"
            data-bg={props.bg}
            aria-label={props.aria}
          />

          <div className="index-team-main-mate-text page-transition">
            <div>
              <h2>{props.teammatename}</h2>

              <Link to={props.teamatelink} className="page-transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="indexTeamMain">
        <div
          className="index-team-top aos-fade"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <div>
            <h2>Meet the team</h2>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>

            <Link to="/team" className="page-transition">
              Learn More
            </Link>
          </div>
        </div>

        <div className="container-fluid index-team-main-box">
          <div className="row index-team-main-row">
            <div
              className="index-teammate-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexTeamMate
                teammateid="iTMOne"
                bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/team/headshots/man-1.jpg"
                aria="Team mate One Headshot."
                teammatename="John Doe"
                teamatelink="/team#t1"
              ></this.createIndexTeamMate>
            </div>
            <div
              className="index-teammate-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexTeamMate
                teammateid="iTMTwo"
                bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/team/headshots/woman.jpg"
                aria="Team mate Two Headshot."
                teammatename="Jane Doe"
                teamatelink="/team#t2"
              ></this.createIndexTeamMate>
            </div>
            <div
              className="index-teammate-holder col-lg-4 col-md-4 col-sm-12 col-xs-12 aos-fade"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <this.createIndexTeamMate
                teammateid="iTMThree"
                bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/ZooCasa/team/headshots/man-2.jpg"
                aria="Team mate Three Headshot."
                teammatename="John Doe"
                teamatelink="/team#t3"
              ></this.createIndexTeamMate>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexTeamMain;
