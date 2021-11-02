import { useEffect } from "react";

const SFFilter = () => {
  useEffect(() => {
    var sFI;

    //! BOTH
    // Displays/Hides the search field links based on input click or blur
    function sFState(ul, e) {
      setTimeout(() => {
        ul.style.display = e;
      }, 300);
    }

    //! DESKTOP
    const dInput = document.getElementById("dSearchFieldInput");
    const dUL = document.getElementById("dSearchFieldLinks");
    dUL.style.display = "none";

    // Filters the desktop search field links based on user input
    function dSFFilter() {
      let dFilter, dLi, dA, dTxtVal;

      dFilter = dInput.value.toUpperCase();
      dLi = dUL.getElementsByTagName("li");

      for (sFI = 0; sFI < dLi.length; sFI++) {
        dA = dLi[sFI].getElementsByTagName("a")[0];

        dTxtVal = dA.textContent || dA.innerText;

        if (dTxtVal.toUpperCase().indexOf(dFilter) > -1) {
          dLi[sFI].style.display = "";
        } else {
          dLi[sFI].style.display = "none";
        }
      }
    }

    dInput.addEventListener("click", () => {
      sFState(dUL, "block");
    });
    dInput.addEventListener("blur", () => {
      sFState(dUL, "none");
    });
    dInput.addEventListener("keyup", dSFFilter);

    //! MOBILE
    const mInput = document.getElementById("mSearchFieldInput");
    const mUL = document.getElementById("mSearchFieldLinks");
    mUL.style.display = "none";

    // Filters the mobile search field links based on user input
    function mSFFilter() {
      let mFilter, mLi, mA, mTxtVal;

      mFilter = mInput.value.toUpperCase();
      mLi = mUL.getElementsByTagName("li");

      for (sFI = 0; sFI < mLi.length; sFI++) {
        mA = mLi[sFI].getElementsByTagName("a")[0];

        mTxtVal = mA.textContent || mA.innerText;

        if (mTxtVal.toUpperCase().indexOf(mFilter) > -1) {
          mLi[sFI].style.display = "";
        } else {
          mLi[sFI].style.display = "none";
        }
      }
    }

    mInput.addEventListener("click", () => {
      sFState(mUL, "block");
    });
    mInput.addEventListener("blur", () => {
      sFState(mUL, "none");
    });
    mInput.addEventListener("keyup", mSFFilter);
  }, []);

  return "";
};

export default SFFilter;
