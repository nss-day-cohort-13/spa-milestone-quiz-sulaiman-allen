var CarLot = (function(carObj) {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function () {
      // Create XHR object
      var inventoryLoader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      // inventoryLoader.addEventListener("load", populatePage(event));
      inventoryLoader.addEventListener("load", function(event) {
          populatePage(event);
        });
      inventoryLoader.open("GET", "json/inventory.json");
      // Tell the XHR object to start
      inventoryLoader.send();
    }
  };
  
  return carObj;
}(CarLot || {}));

// var CarLot = (function(carObj) {
//   var inventory = [];

//   return {
//     activateEvents: function () {
//       document.getElementsByClassName("container")[0].addEventListener("click", function(){
//         console.log("click event = ", event);
//       }); //carObj.setBoarder(carElement, carColor)
//     }
//   };
  
//   return carObj;
// }(CarLot || {}));

function populatePage (event) {

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

    domString += `<div class="col-sm-4"><h3>${make} ${model}</h3><p>${year}</p><p>${price}</p><p>${color}</p></div>`
  }

  domString += `</div>`;

  document.getElementsByClassName("container")[0].innerHTML = domString;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
