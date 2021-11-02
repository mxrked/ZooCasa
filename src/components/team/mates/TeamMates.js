import { Component } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

class TeamMates extends Component {
  constructor(props) {
    super(props);

    this.createTeamMate = this.createTeamMate.bind(this);
  }

  createTeamMate(props) {
    return (
      <div className="team-mate container-fluid" id={props.teamMateID}>
        <div className="team-mate-inner row">
          <div className={props.teamMateClasses1}>
            <div className="team-mate-inner-side-cnt">
              <div
                className="team-mate-inner-side-img lazyload"
                data-bg={props.teamMateBg}
                aria-label={props.teamMateBgAria}
              />
            </div>
          </div>
          <div className={props.teamMateClasses2}>
            <div className="team-mate-inner-side-cnt">
              <div className="team-mate-inner-side-text">
                <h2>John Doe</h2>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
                </p>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>

                <div>
                  <FaTwitter className="fa-icon" />

                  <FaFacebook className="fa-icon" />

                  <FaInstagram className="fa-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="teamMates">
        <div className="team-mates-holder">
          <div
            className="team-mate-fade-holder aos-fade"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <this.createTeamMate
              teamMateID="teamMateL"
              teamMateClasses1="team-mate-inner-side col-lg-5 col-md-5 col-sm-12 col-xs-12"
              teamMateClasses2="team-mate-inner-side col-lg-7 col-md-7 col-sm-12 col-xs-12"
              teamMateBgAria="John Doe Headshot"
              teamMateBg="http://basicallyeasy.com/DynamicCDNS/zoocasa/headshots/man-1.jpg"
            />
          </div>
          <div
            className="team-mate-fade-holder aos-fade"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <div className="team-mate container-fluid" id="teamMateM">
              <div className="team-mate-inner row">
                <div className="team-mate-inner-side col-lg-7 col-md-7 col-sm-12 col-xs-12 order-lg-first order-md-last order-sm-last order-last">
                  <div className="team-mate-inner-side-cnt">
                    <div className="team-mate-inner-side-text">
                      <h2>Jane Doe</h2>

                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                      </p>

                      <div>
                        <FaTwitter className="fa-icon" />

                        <FaFacebook className="fa-icon" />

                        <FaInstagram className="fa-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-mate-inner-side col-lg-5 col-md-5 col-sm-12 col-xs-12 order-lg-last order-md-first order-sm-first order-first">
                  <div
                    className="team-mate-inner-side-img lazyload"
                    data-bg="http://basicallyeasy.com/DynamicCDNS/zoocasa/headshots/woman.jpg"
                    aria-label="Jane Doe Headshot"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="team-mate-fade-holder aos-fade"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <this.createTeamMate
              teamMateID="teamMateL"
              teamMateClasses1="team-mate-inner-side col-lg-5 col-md-5 col-sm-12 col-xs-12"
              teamMateClasses2="team-mate-inner-side col-lg-7 col-md-7 col-sm-12 col-xs-12"
              teamMateBgAria="John Doe Headshot"
              teamMateBg="http://basicallyeasy.com/DynamicCDNS/zoocasa/headshots/man-2.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMates;
