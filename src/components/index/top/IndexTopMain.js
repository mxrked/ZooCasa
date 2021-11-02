import Slider from "react-slick";

import IndexTopSlide1 from "./slides/IndexTopSlide1";
import IndexTopSlide2 from "./slides/IndexTopSlide2";
import IndexTopSlide3 from "./slides/IndexTopSlide3";

const IndexTopMain = () => {
  const iTopSettings = {
    dots: true,
    inifinte: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div id="indexTop">
      <Slider {...iTopSettings}>
        <IndexTopSlide1 />
        <IndexTopSlide2 />
        <IndexTopSlide3 />
      </Slider>
    </div>
  );
};

export default IndexTopMain;
