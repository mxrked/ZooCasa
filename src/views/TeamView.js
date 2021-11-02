//! Team Page

import { Fragment, useEffect } from "react";

import { motion } from "framer-motion";

import DesktopNavMain from "../components/nav/desktop/DesktopNavMain";
import MenuMain from "../components/nav/menu/MenuMain";
import MobileNavMain from "../components/nav/mobile/MobileNavMain";
import UnderNavMain from "../components/nav/under-nav/UnderNavMain";
import TeamTop from "../components/team/top/TeamTop";
import TeamMates from "../components/team/mates/TeamMates";
import ScrollToTeamMate from "../components/team/mates/ScrollToTeamMate";

//* Components

//* Assets

const TeamView = () => {
  useEffect(() => {
    document.title = "ZooCasa | Our Team";
  }, []);

  return (
    <motion.div
      id="teamBody"
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

      <TeamTop />
      <TeamMates />
      <Fragment>
        <ScrollToTeamMate />
      </Fragment>
    </motion.div>
  );
};

export default TeamView;
