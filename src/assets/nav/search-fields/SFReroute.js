// This script is for rerouting the user based on the search field inputs

import { useEffect } from "react";

const SFReroute = () => {
  useEffect(() => {
    //! DESKTOP
    const dInput = document.getElementById("dSearchFieldInput");
    const dGo = document.getElementById("dSearchFieldGo");
    dGo.addEventListener("click", () => {
      checkingSFS();
    });

    //! MOBILE
    const mInput = document.getElementById("mSearchFieldInput");
    const mGo = document.getElementById("mSearchFieldGo");
    mGo.addEventListener("click", () => {
      checkingSFS();
    });

    //! BOTH

    // This will reroute the user to the page they searched into the search field input
    function rerouteSF(route) {
      const serverHost = "/react-projects/zoocasa/";

      window.history.pushState("object or string", "Title", serverHost + route);
    }

    // This will check all of the search fields, then will reroute the user based on what search field they
    // are using based on the search field input
    function checkingSFS() {
      //! DESKTOP Search Field
      const dInputVal = dInput.value.toLowerCase();
      switch (true) {
        case dInputVal.indexOf("home") > -1 || dInputVal.indexOf("index") > -1:
          rerouteSF("home");
          window.location.reload();
          break;
        case dInputVal.indexOf("exhibits") > -1 ||
          dInputVal.indexOf("exhibit") > -1:
          rerouteSF("exhibits#g0");
          window.location.reload();
          break;
        case dInputVal.indexOf("felines") > -1 ||
          dInputVal.indexOf("feline") > -1 ||
          dInputVal.indexOf("lions") > -1 ||
          dInputVal.indexOf("lion") > -1 ||
          dInputVal.indexOf("tigers") > -1 ||
          dInputVal.indexOf("tigers") > -1:
          rerouteSF("exhibits#g1");
          window.location.reload();
          break;
        case dInputVal.indexOf("primates") > -1 ||
          dInputVal.indexOf("primate") > -1 ||
          dInputVal.indexOf("gorillas") > -1 ||
          dInputVal.indexOf("gorilla") > -1 ||
          dInputVal.indexOf("monkeys") > -1 ||
          dInputVal.indexOf("monkey") > -1:
          rerouteSF("exhibits#g2");
          window.location.reload();
          break;
        case dInputVal.indexOf("aquatics") > -1 ||
          dInputVal.indexOf("aquatic") > -1 ||
          dInputVal.indexOf("fishes") > -1 ||
          dInputVal.indexOf("fish") > -1 ||
          dInputVal.indexOf("turtles") > -1 ||
          dInputVal.indexOf("turtle") > -1:
          rerouteSF("exhibits#g3");
          window.location.reload();
          break;
        case dInputVal.indexOf("about") > -1 ||
          dInputVal.indexOf("about us") > -1 ||
          dInputVal.indexOf("background") > -1:
          rerouteSF("about");
          window.location.reload();
          break;
        case dInputVal.indexOf("team") > -1 ||
          dInputVal.indexOf("our team") > -1 ||
          dInputVal.indexOf("memebers") > -1:
          rerouteSF("team");
          window.location.reload();
          break;
        case dInputVal.indexOf("contact") > -1 ||
          dInputVal.indexOf("contact us") > -1 ||
          dInputVal.indexOf("reach out") > -1:
          rerouteSF("contact");
          window.location.reload();
          break;
      }

      //! MOBILE Search Field
      const mInputVal = mInput.value.toLowerCase();
      switch (true) {
        case mInputVal.indexOf("home") > -1 || mInputVal.indexOf("index") > -1:
          rerouteSF("home");
          window.location.reload();
          break;
        case mInputVal.indexOf("exhibits") > -1 ||
          mInputVal.indexOf("exhibit") > -1:
          rerouteSF("exhibits#g0");
          window.location.reload();
          break;
        case mInputVal.indexOf("felines") > -1 ||
          mInputVal.indexOf("feline") > -1 ||
          mInputVal.indexOf("lions") > -1 ||
          mInputVal.indexOf("lion") > -1 ||
          mInputVal.indexOf("tigers") > -1 ||
          mInputVal.indexOf("tigers") > -1:
          rerouteSF("exhibits#g1");
          window.location.reload();
          break;
        case mInputVal.indexOf("primates") > -1 ||
          mInputVal.indexOf("primate") > -1 ||
          mInputVal.indexOf("gorillas") > -1 ||
          mInputVal.indexOf("gorilla") > -1 ||
          mInputVal.indexOf("monkeys") > -1 ||
          mInputVal.indexOf("monkey") > -1:
          rerouteSF("exhibits#g2");
          window.location.reload();
          break;
        case mInputVal.indexOf("aquatics") > -1 ||
          mInputVal.indexOf("aquatic") > -1 ||
          mInputVal.indexOf("fishes") > -1 ||
          mInputVal.indexOf("fish") > -1 ||
          mInputVal.indexOf("turtles") > -1 ||
          mInputVal.indexOf("turtle") > -1:
          rerouteSF("exhibits#g3");
          window.location.reload();
          break;
        case mInputVal.indexOf("about") > -1 ||
          mInputVal.indexOf("about us") > -1 ||
          mInputVal.indexOf("background") > -1:
          rerouteSF("about");
          window.location.reload();
          break;
        case mInputVal.indexOf("team") > -1 ||
          mInputVal.indexOf("our team") > -1 ||
          mInputVal.indexOf("memebers") > -1:
          rerouteSF("team");
          window.location.reload();
          break;
        case mInputVal.indexOf("contact") > -1 ||
          mInputVal.indexOf("contact us") > -1 ||
          mInputVal.indexOf("reach out") > -1:
          rerouteSF("contact");
          window.location.reload();
          break;
      }
    }

    // If the user presses enter when there is a valid input in any of the search fields,
    // it will reroute them to the respect page
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkingSFS();
      }
    });
  }, []);

  return "";
};

export default SFReroute;
