//! Index Page

import { useEffect } from "react";
import { motion } from "framer-motion";

import DesktopNavMain from "../components/nav/desktop/DesktopNavMain";
import MenuMain from "../components/nav/menu/MenuMain";
import MobileNavMain from "../components/nav/mobile/MobileNavMain";
import UnderNavMain from "../components/nav/under-nav/UnderNavMain";

//* Components
import IndexTopMain from "../components/index/top/IndexTopMain";
import IndexExhibitsMain from "../components/index/exhibits/IndexExhibitsMain";
import IndexEventsMain from "../components/index/events/IndexEventsMain";
import IndexAboutMain from "../components/index/about/IndexAboutMain";
import IndexTeamMain from "../components/index/team/IndexTeamMain";

//* Assets

const HomeView = () => {
  useEffect(() => {
    document.title = "ZooCasa | Home";
  }, []);

  return (
    <motion.div
      id="indexBody"
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <DesktopNavMain />
      <MobileNavMain />
      <MenuMain />

      <UnderNavMain />

      <IndexTopMain />
      <IndexExhibitsMain />
      <IndexAboutMain />
      <IndexEventsMain />
      <IndexTeamMain />
    </motion.div>
  );
};

export default HomeView;
