//! Contact Page

import { useEffect } from "react";

import { motion } from "framer-motion";

import DesktopNavMain from "../components/nav/desktop/DesktopNavMain";
import MenuMain from "../components/nav/menu/MenuMain";
import MobileNavMain from "../components/nav/mobile/MobileNavMain";
import UnderNavMain from "../components/nav/under-nav/UnderNavMain";

//* Components
import ContactTop from "../components/contact/top/ContactTop";
import ContactForm from "../components/contact/form/ContactForm";
import ContactUnderForm from "../components/contact/under-form/ContactUnderForm";

//* Assets

const ContactView = () => {
  useEffect(() => {
    document.title = "ZooCasa | Contact Us";
  }, []);

  return (
    <motion.div
      id="contactBody"
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

      <ContactTop />
      <ContactForm />
      <ContactUnderForm />
    </motion.div>
  );
};

export default ContactView;
