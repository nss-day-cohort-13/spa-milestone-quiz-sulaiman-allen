// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
var carLot = (function(carObj) {

  // Main Array
  var inventory = [];

    carObj.getInventory = function () {
      return inventory;
    }; 

    setInventory = function () { // Experimental

        var carList = JSON.parse(event.currentTarget.responseText);
        var carArray = [];
        for (i = 0; i < carList.cars.length; i++) {
          carArray[carArray.length] = (carList.cars[i]);
        };
        inventory = carArray;
        carLot.populatePage();
    };

    carObj.loadInventory = function () {

      // Create XHR object
      var inventoryLoader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      inventoryLoader.addEventListener("load", setInventory);
          // populatePage(event);
      inventoryLoader.open("GET", "json/inventory.json");
      // Tell the XHR object to start
      inventoryLoader.send();
    };

    carObj.populatePage = function () {

      var carList = carObj.getInventory();

      // Loop over the inventory and populate the page
      domString = `<div class="row">`;

      for(var i = 0; i < carList.length; i++) {
        // console.log("car", carList.cars[i]);
        make = carList[i].make;
        model = carList[i].model;
        year = carList[i].year;
        price = carList[i].price;
        color = carList[i].color;

        domString += `<div class="col-sm-4" id="div${color}"><h3>${make} ${model}</h3>`

        if (model === "Rogue") {
          domString += `<img src="img/rogue.jpg">`
        } else if (model === "X5") {
          domString += `<img src="img/x5.jpg">`
        } else if (model === "Cayenne") {
          domString += `<img src="img/cayenne.jpg">`
        }
      
        domString += `<p>Year: ${year}</p><p>Price: ${price}</p><p id=color>Color: ${color}</p></div>`
      }

      domString += `</div>`;

      document.getElementsByClassName("container")[0].innerHTML = domString;

      // Now that the DOM is loaded, establish all the event listeners needed
      carLot.activateEvents();
    };
  
  return carObj;
}(carLot || {}));