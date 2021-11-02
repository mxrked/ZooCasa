import { Component } from "react";
import AquaticItems from "./sub/AquaticItems";
import FelineItems from "./sub/FelineItems";
import PrimateItems from "./sub/PrimateItems";

class ExhibitsGroupItems extends Component {
  render() {
    return (
      <div id="exhibitsGroupItems">
        <div
          className="exhibits-group-items-box container-fluid aos-fade"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <FelineItems />
          <PrimateItems />
          <AquaticItems />
        </div>
      </div>
    );
  }
}

export default ExhibitsGroupItems;
