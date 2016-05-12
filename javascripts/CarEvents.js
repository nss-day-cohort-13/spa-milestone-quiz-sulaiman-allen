// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
"use strict";

var carLot = (function(carObj) {

    carObj.activateEvents = function () {

      var domElement;

      //Event listener for the cards
      document.getElementsByClassName("container")[0].addEventListener("click", function() {
        
        var clickedOn = event.target;
        var color;

        // if the div element is clicked, return the value of the lastElementChild (color)
        if (clickedOn.classList.value === "col-sm-4") {

            domElement = event.target.id;
            // console.log("event.target.classList", event.target.classList);
            color = clickedOn.lastElementChild.innerHTML.slice(7);

        } else if (clickedOn.classList.value !== "color") { // if an element that is a sibling of the color element is clicked

            while(clickedOn.innerHTML.slice(0,5) !== "Color") {
                clickedOn = clickedOn.nextSibling;
            }
            domElement = event.target.parentNode.id;
            color = clickedOn.innerHTML.slice(7);

        } else { // if the actual color element is clicked

            domElement = event.target.parentNode.id;
            color = clickedOn.innerHTML.slice(7);
        }

        carLot.setBorder(domElement, color);
      }); //carObj.setBoarder(carElement, carColor)
    };

  return carObj;
}(carLot || {}));