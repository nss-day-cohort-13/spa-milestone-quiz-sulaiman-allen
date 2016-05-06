// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

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
      inventoryLoader.addEventListener("load", function(event) {
        populatePage(event);
      });
      inventoryLoader.open("GET", "json/inventory.json");
      // Tell the XHR object to start
      inventoryLoader.send();
    }
  };