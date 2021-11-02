import { useEffect } from "react";

const ExhibitsGroupModals = () => {
  useEffect(() => {
    document.getElementById("exhibitsGroupModalDarken").style.display = "none";
    document.getElementById("exhibitsGroupModalDarken").style.pointerEvents =
      "none";

    // This will be used to create each of the item's modal
    function createExhibitGroupModal(modalSrc) {
      document.getElementById("exhibitsGroupModalDarken").style.display =
        "block";

      setTimeout(() => {
        document.getElementById(
          "exhibitsGroupModalDarken"
        ).style.pointerEvents = "auto";
        document.getElementById("exhibitsGroupModalDarken").style.cursor =
          "pointer";
      }, 1200);

      const modalMain = document.createElement("div");
      modalMain.className += "exhibit-group-item-modal page-transition";

      const modalImg = document.createElement("div");
      modalImg.style.backgroundImage = `url(${modalSrc})`;
      modalImg.className += "exhibit-group-item-modal-img";

      const modalContent = document.createElement("div");
      modalContent.className += "exhibit-group-item-modal-cnt";

      const modalCloser = document.createElement("button");
      modalCloser.className +=
        "exhibit-group-item-modal-closer page-transition";
      modalCloser.innerHTML = "Close";

      modalCloser.addEventListener("click", () => {
        modalCloser.disabled = true;
        modalCloser.style.cursor = "default";
        closeAllExhibitModals();
      });

      modalMain.appendChild(modalImg);
      modalContent.appendChild(modalCloser);
      modalMain.appendChild(modalContent);
      document.getElementById("exhibitsBody").appendChild(modalMain);
    }

    const allExhibitGroupItemInner = document.querySelectorAll(
      ".exhibits-group-item-inner"
    );
    allExhibitGroupItemInner[0].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/felines/feline-1.jpg"
      );
    });
    allExhibitGroupItemInner[1].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/felines/feline-2.jpg"
      );
    });
    allExhibitGroupItemInner[2].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/felines/feline-3.jpg"
      );
    });
    allExhibitGroupItemInner[3].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/primates/primate-1.jpg"
      );
    });
    allExhibitGroupItemInner[4].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/primates/primate-2.jpg"
      );
    });
    allExhibitGroupItemInner[5].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/primates/primate-3.jpg"
      );
    });
    allExhibitGroupItemInner[6].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/aquatics/aquatic-1.jpg"
      );
    });
    allExhibitGroupItemInner[7].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/aquatics/aquatic-2.jpg"
      );
    });
    allExhibitGroupItemInner[8].addEventListener("click", () => {
      createExhibitGroupModal(
        "http://basicallyeasy.com/DynamicCDNS/zoocasa/exhibits/aquatics/aquatic-3.jpg"
      );
    });

    // This will close out all of the exhibit modals
    function closeAllExhibitModals() {
      document.getElementById("exhibitsGroupModalDarken").style.pointerEvents =
        "none";
      document.getElementById("exhibitsGroupModalDarken").style.cursor =
        "default";
      document
        .querySelectorAll(".exhibit-group-item-modal")
        .forEach((modal) => {
          modal.style.display = "none";
        });
      document.getElementById("exhibitsGroupModalDarken").style.display =
        "none";
    }

    // Allows the user to click outside of the modal to close it
    window.addEventListener("click", (e) => {
      if (e.target == document.getElementById("exhibitsGroupModalDarken")) {
        closeAllExhibitModals();
      }
    });
    window.addEventListener("popstate", () => {
      closeAllExhibitModals();
      window.location.reload();
    });
  });

  return <div id="exhibitsGroupModalDarken" className="page-transition"></div>;
};

export default ExhibitsGroupModals;
