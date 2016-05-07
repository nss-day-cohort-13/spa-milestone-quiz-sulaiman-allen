// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.

var carLot = (function(carObj) {

    carObj.activateEvents = function () {
      document.getElementsByClassName("container")[0].addEventListener("click", function() {
        // console.log("click event = ", event.target);
        // carLot.borderReset();
        // carLot.activateEvents();
        carLot.setBorder(event.target);
      }); //carObj.setBoarder(carElement, carColor)
    };

  return carObj;
}(carLot || {}));