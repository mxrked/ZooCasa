import { useEffect } from "react";

const ScrollToTeamMate = () => {
  useEffect(() => {
    const globalURL = window.location.href.toLowerCase();
    const allTeamMates = document.querySelectorAll(".team-mate");

    // This will check if the user is on the team page and if so it will run the scroll script
    function checkingURLForTeamPage() {
      if (globalURL.indexOf("team") > -1) {
        console.log("The user is on the team page.");
        checkingTeamMate();
      }

      // This may never run but incase it does this message will display in the console.
      if (!globalURL.indexOf("team") > -1) {
        console.log(
          "The user is not on the Team page. IGNORE checkingTeamMate();"
        );
      }
    }

    // This will check what team mate to scroll to based on the URL hash
    function checkingTeamMate() {
      if (globalURL.indexOf("team#t1") > -1) {
        allTeamMates[0].scrollIntoView();
      } else if (globalURL.indexOf("team#t2") > -1) {
        allTeamMates[1].scrollIntoView();
      } else if (globalURL.indexOf("team#t3") > -1) {
        allTeamMates[2].scrollIntoView();
      }
    }

    // This is for when the user enters the team page and will trigger the checkingTeamMate()
    function initializeScroll() {
      setTimeout(() => {
        checkingURLForTeamPage();
      }, 100);
    }

    // Will run function when the hash is added to team page and when the page loads
    window.addEventListener("popstate", () => {
      initializeScroll();
    });
    initializeScroll();
  }, []);

  return "";
};

export default ScrollToTeamMate;
