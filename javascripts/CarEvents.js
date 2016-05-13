// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
"use strict";

var carLot = (function(carObj) {

    carObj.activateEvents = function () {

      var domElement;

      //Event listener for the cards
      document.getElementsByClassName("container")[0].addEventListener("click", function() {

        if(!event.target.classList.contains("col-sm-4")) {
          domElement = event.target.parentNode.id;
          var color = domElement.slice(3);
          console.log("event.target = ", event.target);
          console.log("color = " , color);
        }
        // domElement = event.target.parentNode.id;
        // var color = domElement.slice(3);
        // console.log("event.target = ", event.target);
        // console.log("color = " , color);

        carLot.setBorder(domElement, color);
      });
    };

  return carObj;
}(carLot || {}));