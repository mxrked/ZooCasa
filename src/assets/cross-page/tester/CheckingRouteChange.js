import { useEffect } from "react";
import { useHistory } from "react-router";

const CheckingRouteChange = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location) => {
      console.log("new location: ", location);
    });

    return function cleanup() {
      unlisten();
    };
  }, [history]);

  return "";
};

export default CheckingRouteChange;
