// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
"use strict";

var carLot = (function(carObj) {

    carObj.activateEvents = function () {

      var domElement;

      //Event listener for the cards
      document.getElementsByClassName("container")[0].addEventListener("click", function() {

        // If the div itself is clicked
        if(event.target.classList.item(0) === "col-sm-4") {
          domElement = event.target.id;

        } else { // If one of it's child elements are clicked
          domElement = event.target.parentNode.id;
        }
        
        var color = domElement.slice(3);
        carLot.setBorder(domElement, color);
      });

      document.getElementById("carSearch").addEventListener("keyup", function(e) {

        console.log("keyup here", document.getElementById("carSearch").value);
        console.log("e", e);

        if(document.activeElement.id === "carSearch") {
          document.getElementById(domElement).getElementsByClassName("description")[0].innerHTML = 'Description: ' + 
          document.getElementById("carSearch").value;
          console.log("test");
        }

      
      });
    };

  return carObj;
}(carLot || {}));