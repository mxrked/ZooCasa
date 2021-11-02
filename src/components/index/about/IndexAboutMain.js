import IndexAboutL from "./sides/IndexAboutL";
import IndexAboutR from "./sides/IndexAboutR";

const IndexAboutMain = () => {
  return (
    <div id="indexAboutMain">
      <div className="container-fluid index-about-main-box">
        <div className="row index-about-main-row">
          <IndexAboutL />
          <IndexAboutR />
        </div>
      </div>
    </div>
  );
};

export default IndexAboutMain;
