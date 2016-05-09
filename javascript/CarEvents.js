// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.

var carLot = (function(carObj) {

    carObj.activateEvents = function () {
      document.getElementsByClassName("container")[0].addEventListener("click", function() {
        // console.log("click event = ", event.target);
        // carLot.borderReset();
        // carLot.activateEvents();
        // color = document.getElementsByClassName("container")[0].lastElementChild;//childNodes;
        // color = event.target.lastElementChild.innerHTML;

        // console.log("type of color = ", typeof color);
        color = event.target;
        console.log("color", color);

        // color = color.innerHTML.slice(0,19)
        // console.log("color.innerHTML.slice(0,19)", color);

        // if (color.innerHTML.slice(0,19) !== '<div class="col-sm-4"') {
        if (color.innerHTML) {

          // if the color p element is selected, the color has been found
          if(color.innerHTML.slice(0,5) === "Color") {
            color = color.innerHTML.slice(7);
            console.log("color = ", color);
          }
        // }else if (color.)
        }
        console.log("type of color = ", typeof color);
        // color = event.target.lastElementChild.innerHTML.slice(0,13);
        // <p id="color">Color: Grey</p>
        // if (color === '<p id="color"')
        // console.log("color", color);
        // carLot.setBorder(event.target);
      }); //carObj.setBoarder(carElement, carColor)
    };

  return carObj;
}(carLot || {}));