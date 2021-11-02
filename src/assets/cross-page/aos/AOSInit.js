import Aos from "aos";
import { useEffect } from "react";

const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      //! disable: 'mobile',
      /*
      !
      Disabling on mobile breaks the AOS
      due to us using framer motion?
      !
      */
    });
  }, []);

  return "";
};

export default AOSInit;
