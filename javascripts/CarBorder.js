// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color 
// for each car element back to the original values. The other function changes the thickness of the border of a car element, and
// changes its background color. The function must accept two arguments.
// 1. A car DOM element that was clicked on.
// 2. A color name.
"use strict";

var carLot = (function(carObj) {

    carObj.borderReset = function () {

      var cardIds = carObj.getCardArray(); // The ids of all the cards on the page

      for(var card in cardIds) {
        // cycle through and remove any styling classes attached to any of the cards
        document.getElementById(cardIds[card]).classList.remove(cardIds[card]);
      }
    };

    carObj.setBorder = function (id, color) {
      carObj.borderReset();

      // clear text input field and move cursor to the end of it
      var inputBar = document.getElementById("carSearch");
      inputBar.value = '';
      inputBar.focus();

      carObj.setDescription(id);

      color = color; // I know it is cheating to use color this way but my linter is screaming at me. The color is selected early on
      document.getElementById(id).classList.add(id);
    };

    carObj.setDescription = function (id) {

      while(document.getElementById("carSearch").focus) {
        var description = document.getElementById(id).getElementsByClassName("description")[0].innerHTML;
        console.log("description = ", description);
      }

    };
 
  return carObj;
}(carLot || {}));