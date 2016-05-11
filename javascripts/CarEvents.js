// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
"use strict";

var carLot = (function(carObj) {

    carObj.activateEvents = function () {

      //Event listener for the cards
      document.getElementsByClassName("container")[0].addEventListener("click", function() {
        
        var clickedOn = event.target;
        var color;

        // if the div element is clicked, return the value of the lastElementChild (color)
        if (clickedOn.classList.value === "col-sm-4") {

            color = clickedOn.lastElementChild.innerHTML.slice(7);

        } else if (clickedOn.classList.value !== "color") { // if an element that is a sibling of the color element is clicked

            while(clickedOn.innerHTML.slice(0,5) !== "Color") {
                clickedOn = clickedOn.nextSibling;
            }
            color = clickedOn.innerHTML.slice(7);

        } else { // if the actual color element is clicked

            color = clickedOn.innerHTML.slice(7);
        }

        console.log("Color = ", color);

        // carLot.setBorder(event.target);
      }); //carObj.setBoarder(carElement, carColor)
    };

  return carObj;
}(carLot || {}));