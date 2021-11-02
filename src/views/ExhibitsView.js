//! Exhibits Page

import { Fragment, useEffect } from "react";

import { motion } from "framer-motion";

import DesktopNavMain from "../components/nav/desktop/DesktopNavMain";
import MenuMain from "../components/nav/menu/MenuMain";
import MobileNavMain from "../components/nav/mobile/MobileNavMain";
import UnderNavMain from "../components/nav/under-nav/UnderNavMain";
import ExhibitsTopBGS from "../components/exhibits/topbgs/ExhibitsTopBGS";
import ExhibitsMainTop from "../components/exhibits/maintop/ExhibitsMainTop";
import ExhibitsGroupBtns from "../components/exhibits/groupbtns/ExhibitsGroupBtns";
import ExhibitsGroupItems from "../components/exhibits/groupitems/ExhibitsGroupItems";
import ExhibitsGroupModals from "../components/exhibits/groupitems/ExhibitsGroupModals";
import ExhibitsTicketsMain from "../components/exhibits/tickets/ExhibitsTicketsMain";

//* Components

//* Assets

const ExhibitsView = () => {
  useEffect(() => {
    document.title = "ZooCasa | Our Exhibits";
  }, []);

  return (
    <motion.div
      id="exhibitsBody"
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
      <ExhibitsGroupModals />
      <DesktopNavMain />
      <MobileNavMain />
      <MenuMain />

      <UnderNavMain />

      <ExhibitsTopBGS />
      <ExhibitsMainTop />
      <ExhibitsGroupBtns />
      <ExhibitsGroupItems />
      <ExhibitsTicketsMain />
    </motion.div>
  );
};

export default ExhibitsView;
