// This script is for displaying the exhibit group items based on what which is clicked, this will be used for checking the exhibit page URL

export function displayExhibitGroup(group) {
  var i;
  const allExhibitItems = document.getElementsByClassName(
    "exhibits-group-item"
  );

  setTimeout(() => {
    for (i = 0; i < allExhibitItems.length; i++) {
      allExhibitItems[i].style.display = "none";
    }
  }, 500);

  setTimeout(() => {
    for (i = 0; i < group.length; i++) {
      group[i].style.display = "block";
    }
  }, 600);
}
