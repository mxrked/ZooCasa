import { useEffect } from "react";

const MenuMainFunc = () => {
  useEffect(() => {
    const menuDark = document.getElementById("menuDarken");
    const menuMain = document.getElementById("menuMain");
    const menuMainCnt = document.getElementById("menuMainContent");
    const menuCloser = document.getElementById("menuCloserBtn");
    const menuExhibitsLinks = document.getElementById("menuExhibitLinks");
    const menuExhibitsCB = document.getElementById("menuExhibitsCB");
    const mEL = document.getElementById("menuExhibitsLabel");

    menuDark.style.pointerEvents = "none";
    menuExhibitsCB.checked = false;

    // Changes menu exhibits text based on checkbox
    function changeMenuExhibitsCB(txt, chv) {
      mEL.innerText = `${txt} ${chv}`;
    }

    // Checks the menu exhibits Checkbox to display/hide it
    function checkingMenuExhibits() {
      if (menuExhibitsCB.checked) {
        menuExhibitsLinks.style.height = "200px";
        changeMenuExhibitsCB("Exhibits", "▲");
      } else {
        menuExhibitsLinks.style.height = "0px";
        changeMenuExhibitsCB("Exhibits", "▼");
      }
    }
    checkingMenuExhibits();

    function allowScrolling() {
      document.body.style.overflowY = "auto";
    }

    // Closes the menu when user clicks on any of the exhibit links
    document.querySelectorAll(".menu-exhibit-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
        allowScrolling();
      });
    });

    document.querySelectorAll(".menu-main-link").forEach((link) => {
      link.addEventListener("click", () => {
        allowScrolling();
      });
    });

    // Closes menu
    function closeMenu() {
      menuDark.style.pointerEvents = "none";
      menuCloser.style.pointerEvents = "none";
      menuMainCnt.classList.toggle("deactive");

      setTimeout(() => {
        menuMain.style.width = "0";
      }, 300);
      setTimeout(() => {
        menuDark.classList.toggle("deactive");
      }, 500);
      setTimeout(() => {
        menuDark.style.display = "none";
        document.querySelectorAll(".menu-toggler-btn").forEach((btn) => {
          btn.style.pointerEvents = "auto";
        });
        document.body.style.overflowY = "auto";
      }, 1400);

      // Closes menuExhibitLinks
      menuExhibitsCB.checked = false;
      checkingMenuExhibits();
    }

    menuCloser.addEventListener("click", closeMenu);
    menuExhibitsCB.addEventListener("change", checkingMenuExhibits);
    window.addEventListener("click", (e) => {
      if (e.target === menuDark) {
        closeMenu();
      }
    });
  }, []);

  return "";
};

export default MenuMainFunc;
