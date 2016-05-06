function populatePage (inventory) {

	console.log("IN after load");
	var carList = JSON.parse(this.responseText);
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

function fileNotFound () {
	alert("loading of file failed");
}


// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", populatePage);
myRequest.addEventListener("error", fileNotFound);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "inventory.json");

// Tell the XHR object to start
myRequest.send();