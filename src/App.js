import React from "react";

//* React Router
import { Switch, Route, useLocation } from "react-router-dom";

//* Framer Motion
import { AnimatePresence } from "framer-motion";

//* AOS
import AOSInit from "./assets/cross-page/aos/AOSInit";

//* Scroll Restoration
import ScrollRestoration from "react-scroll-restoration";

//! Imports
import "./imports/styling_imports";
import "./imports/bootstrap_imports";
import "./imports/react-slick_imports";
import "./imports/aos_imports";
import "./imports/lazysizes_imports";

//! Views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ExhibitsView from "./views/ExhibitsView";
import TeamView from "./views/TeamView";
import ContactView from "./views/ContactView";
import { HelmetProvider } from "react-helmet-async";
import HelmetAsyncMain from "./assets/cross-page/helmet-async/HelmetAsyncMain";

//! Assets
import BackToTop from "./components/overlay/back-to-top/BackToTop";
import CheckingRouteChange from "./assets/cross-page/tester/CheckingRouteChange";
import FooterMain from "./components/footer/FooterMain";

const Motions = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollRestoration />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={HomeView} />
        <Route path="/home" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/exhibits" component={ExhibitsView} />
        <Route path="/team" component={TeamView} />
        <Route path="/contact" component={ContactView} />
      </Switch>
    </AnimatePresence>
  );
};

const HelmetAsync = () => {
  return (
    <HelmetProvider>
      <HelmetAsyncMain />
    </HelmetProvider>
  );
};

function App() {
  return (
    <div className="App">
      <HelmetAsync />
      <Motions />
      <AOSInit />
      <CheckingRouteChange />
      <BackToTop />
      <FooterMain />
    </div>
  );
}

export default App;
