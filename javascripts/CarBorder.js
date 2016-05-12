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
      document.getElementById(id).classList.add(id);
    };
 
  return carObj;
}(carLot || {}));