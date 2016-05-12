// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color 
// for each car element back to the original values. The other function changes the thickness of the border of a car element, and
// changes its background color. The function must accept two arguments.
// 1. A car DOM element that was clicked on.
// 2. A color name.
"use strict";

var carLot = (function(carObj) {

    carObj.borderReset = function () {
      return;
    };

    carObj.setBorder = function (id, color) {
      console.log("id", id);
      console.log("color = ", color);
      document.getElementById(id).classList.add("div" + color);
      var cardIds = carObj.getCardArray();

      for(var card in cardIds) {
        if (document.getElementById(id).classList.contains("div" + color)) {
          console.log("matched");

          document.getElementById(card).classList.remove("div" + color);
        }
      }
      console.log("cardArray", cardIds);


    };
 
  return carObj;
}(carLot || {}));