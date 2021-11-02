//! About Page

import { useEffect } from "react";

import { motion } from "framer-motion";

import DesktopNavMain from "../components/nav/desktop/DesktopNavMain";
import MenuMain from "../components/nav/menu/MenuMain";
import MobileNavMain from "../components/nav/mobile/MobileNavMain";
import UnderNavMain from "../components/nav/under-nav/UnderNavMain";
import AboutBackground from "../components/about/background/AboutBackground";
import AboutTestimonials from "../components/about/testimonials/AboutTestimonials";
import AboutGoals from "../components/about/goals/AboutGoals";

//* Components

//* Assets

const AboutView = () => {
  useEffect(() => {
    document.title = "ZooCasa | About Us";
  }, []);

  return (
    <motion.div
      id="aboutBody"
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

      <AboutBackground />
      <AboutTestimonials />
      <AboutGoals />
    </motion.div>
  );
};

export default AboutView;
