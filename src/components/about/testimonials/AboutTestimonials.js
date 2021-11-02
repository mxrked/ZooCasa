import { Component } from "react";
import Slider from "react-slick";

class AboutTestimonials extends Component {
  constructor(props) {
    super(props);

    this.createAboutTestimonial = this.createAboutTestimonial.bind(this);
  }

  // Creates each about testimonial slide
  createAboutTestimonial(props) {
    return (
      <div className="about-testimonial-slide page-transition">
        <div className="about-testimonial-slide-inner">
          <div className="about-testimonial-slide-cnt">
            <img
              className="lazyload"
              data-src={props.aboutTestimonialImgSRC}
              alt={props.aboutTestimonialImgALT}
            />

            <div>
              <blockquote>{props.aboutTestimonialBQ}</blockquote>

              <span>{props.aboutTestimonialSPAN}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const testimonialsSettings = {
      dots: true,
      inifinte: true,
      centerMode: true,
      arrows: false,
      autoplay: true,
      slidesToShow: 2,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };

    return (
      <div id="aboutTestimonials">
        <div
          className="about-testimonials-holder aos-fade"
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <Slider {...testimonialsSettings}>
            <div>
              <this.createAboutTestimonial
                aboutTestimonialImgSRC="http://basicallyeasy.com/DynamicCDNS/zoocasa/stock-headshots/male-1.jpg"
                aboutTestimonialImgALT="John Doe Testimonial"
                aboutTestimonialBQ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                aboutTestimonialSPAN="John Doe."
              />
            </div>
            <div>
              <this.createAboutTestimonial
                aboutTestimonialImgSRC="http://basicallyeasy.com/DynamicCDNS/zoocasa/stock-headshots/female-1.jpg"
                aboutTestimonialImgALT="Jane Doe Testimonial"
                aboutTestimonialBQ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                aboutTestimonialSPAN="Jane Doe."
              />
            </div>
            <div>
              <this.createAboutTestimonial
                aboutTestimonialImgSRC="http://basicallyeasy.com/DynamicCDNS/zoocasa/stock-headshots/male-2.jpeg"
                aboutTestimonialImgALT="John Doe Testimonial"
                aboutTestimonialBQ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                aboutTestimonialSPAN="John Doe."
              />
            </div>
            <div>
              <this.createAboutTestimonial
                aboutTestimonialImgSRC="http://basicallyeasy.com/DynamicCDNS/zoocasa/stock-headshots/female-2.jpg"
                aboutTestimonialImgALT="Jane Doe Testimonial"
                aboutTestimonialBQ="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                aboutTestimonialSPAN="Jane Doe."
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default AboutTestimonials;
