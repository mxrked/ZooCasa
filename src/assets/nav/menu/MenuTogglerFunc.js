import { useEffect } from "react";

const MenuTogglerFunc = () => {
  useEffect(() => {
    const menuCloser = document.getElementById("menuCloserBtn");
    const menuDark = document.getElementById("menuDarken");
    menuDark.style.display = "none";
    menuDark.classList.toggle("deactive");

    const menuMain = document.getElementById("menuMain");
    const menuMainCnt = document.getElementById("menuMainContent");
    menuMainCnt.classList.toggle("deactive");

    document.querySelectorAll(".menu-toggler-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.style.overflowY = "hidden";
        menuMain.style.overflowY = "auto";
        document.querySelectorAll(".menu-toggler-btn").forEach((btn) => {
          btn.style.pointerEvents = "none";
        });
        menuDark.style.display = "block";

        setTimeout(() => {
          menuDark.classList.remove("deactive");
        }, 300);

        setTimeout(() => {
          menuMain.style.width = "100%";
        }, 500);

        setTimeout(() => {
          menuCloser.style.pointerEvents = "auto";
          menuMainCnt.classList.remove("deactive");
        }, 900);
        setTimeout(() => {
          menuDark.style.pointerEvents = "auto";
        }, 1200);
      });
    });

    // menuToggler.addEventListener("click", () => {
    //   menuToggler.style.pointerEvents = "none";
    //   menuDark.style.display = "block";

    //   setTimeout(() => {
    //     menuDark.classList.remove("deactive");
    //   }, 300);

    //   setTimeout(() => {
    //     menuMain.style.width = "100%";
    //   }, 500);

    //   setTimeout(() => {
    //     menuCloser.style.pointerEvents = "auto";
    //     menuMainCnt.classList.remove("deactive");
    //   }, 900);
    //   setTimeout(() => {
    //     menuDark.style.pointerEvents = "auto";
    //   }, 1200);
    // });
  }, []);

  return "";
};

export default MenuTogglerFunc;
