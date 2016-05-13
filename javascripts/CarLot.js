// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
"use strict";

var carLot = (function(carObj) {

  // Main Array
  var inventory = [];
  var cardArray = [];

    carObj.getCardArray = function() {
      return cardArray;
    };

    carObj.getInventory = function () {
      return inventory;
    }; 

    carObj.setInventory = function () {
      var carList = JSON.parse(event.currentTarget.responseText);
      var carArray = [];
      for (var i = 0; i < carList.cars.length; i++) {
        carArray[carArray.length] = (carList.cars[i]);
      }
      inventory = carArray;
      carLot.populatePage();
    };

    carObj.loadInventory = function () {
      // Create XHR object
      var inventoryLoader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      inventoryLoader.addEventListener("load", carObj.setInventory);
          // populatePage(event);
      inventoryLoader.open("GET", "json/inventory.json");
      // Tell the XHR object to start
      inventoryLoader.send();
    };

    carObj.populatePage = function () {
      var carList = carObj.getInventory();
      // Loop over the inventory and populate the page

      var carCount = 0;
      var domString = `<div class="row">`;

      for(var i = 0; i < carList.length; i++) {
        // console.log("car", carList.cars[i]);
        var make = carList[i].make;
        var model = carList[i].model;
        var year = carList[i].year;
        var price = carList[i].price;
        var color = carList[i].color;
        var purchased = carList[i].purchased;
        var description = carList[i].description;

        carCount++;

        // For every 3 cars, generate a new div with a .col class
        if (carCount % 4 !== 0) {
          domString += `<div class="col-sm-4" id="div${color}"><h3 class="makeAndModel">${make} ${model}</h3>`;
        } else {
          domString += `</div><div class="row"><div class="col-sm-4" id="div${color}"><h3 class="makeAndModel">${make} ${model}</h3>`;
        }
        cardArray.push(`div${color}`);

        if (model === "Rogue") {
          domString += `<img src="img/rogue.jpg" class="carImage">`;
        } else if (model === "X5") {
          domString += `<img src="img/x5.jpg" class="carImage">`;
        } else if (model === "Cayenne") {
          domString += `<img src="img/cayenne.jpg" class="carImage">`;
        } else if (model === "Evoque") {
          domString += `<img src="img/evoque.jpg" class="carImage">`;
        }
        // For every 3 cars, close the div tag
        if (carCount % 4 !== 0) {
          domString += `<p class="year">Year: ${year}</p><p class="price">Price: ${price}</p><p class="purchased">${purchased}</p>
          <p class = description>${description}</p><p class="color">Color: ${color}</p></div>`;
        } else {
          domString += `<p class="year">Year: ${year}</p><p class="price">Price: ${price}</p><p class="purchased">${purchased}</p>
          <p class = description>${description}</p><p class="color">Color: ${color}</p></div></div>`;
        }
      }
      domString += `</div>`;

      document.getElementsByClassName("container")[0].innerHTML = domString;
      // Now that the DOM is loaded, establish all the event listeners needed
      carLot.activateEvents();
    };
  
  return carObj;
}(carLot || {}));