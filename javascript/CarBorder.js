// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color 
// for each car element back to the original values. The other function changes the thickness of the border of a car element, and
// changes its background color. The function must accept two arguments.
// 1. A car DOM element that was clicked on.
// 2. A color name.

var CarLot = (function(carObj) {
  var inventory = [];

  return {
    borderReset: function () {

    },
    setBoarder: function (carElement, carColor) {

    }
  };
  
  return carObj;
}(CarLot || {}));