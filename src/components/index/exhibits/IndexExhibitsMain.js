import IndexExhibitsL from "./sides/IndexExhibitsL";
import IndexExhibitsR from "./sides/IndexExhibitsR";

const IndexExhibitsMain = () => {
  return (
    <div>
      <div id="indexExhibitsMain">
        <div className="container-fluid index-exhibits-main-box">
          <div className="row index-exhibits-main-row">
            <IndexExhibitsL />
            <IndexExhibitsR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexExhibitsMain;
