// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
var CarLot = (function(carObj) {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    }, 
    setInventory: function () { // Experimental
      var carList = JSON.parse(event.currentTarget.responseText);
      var carArray = [];
      for (i = 0; i < carList.cars.length; i++) {
        carArray[carArray.length] = (carList.cars[i]);
      };
      inventory = carArray;
      CarLot.populatePage(inventory);
    },
    loadInventory: function () {
      // Create XHR object
      var inventoryLoader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      inventoryLoader.addEventListener("load", function(event) {
          populatePage(event);
        });
      inventoryLoader.open("GET", "json/inventory.json");
      // Tell the XHR object to start
      inventoryLoader.send();
    }
    populatePage: function (event) {

      console.log("In populatePage");
      var carList = JSON.parse(event.currentTarget.responseText);

      // Loop over the inventory and populate the page
      domString = `<div class="row">`;

      for(var i = 0; i < carList.cars.length; i++) {
        // console.log("car", carList.cars[i]);
        make = carList.cars[i].make;
        model = carList.cars[i].model;
        year = carList.cars[i].year;
        price = carList.cars[i].price;
        color = carList.cars[i].color;

        domString += `<div class="col-sm-4" id="div${color}"><h3>${make} ${model}</h3>`

        if (model === "Rogue") {
          domString += `<img src="img/rogue.jpg">`
        } else if (model === "X5") {
          domString += `<img src="img/x5.jpg">`
        } else if (model === "Cayenne") {
          domString += `<img src="img/cayenne.jpg">`
        }
      
        domString += `<p>${year}</p><p>${price}</p><p>${color}</p></div>`
      }

      domString += `</div>`;

      document.getElementsByClassName("container")[0].innerHTML = domString;

      // Now that the DOM is loaded, establish all the event listeners needed
      CarLot.activateEvents();
    }
  };
  
  return carObj;
}(CarLot || {}));
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();