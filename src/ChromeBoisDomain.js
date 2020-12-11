import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => { 
  //   console.log(event.clientX)
  //  console.log(event.clientY)
   const x = event.clientX
   const y = event.clientY
  drawChromeBoiAtCoords(x, y);
}
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     *     <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
     *  because you're importing drawChromeBoiAtCoords(x, y), 
     * you don't need to use this here
     * remember we want the x and y coordinates of the event
     * So those are our x and y coordinates, 
     * so now we just need to pass those over to the drawChromeBoiAtCoords function (line 12)
     * answer= invokes the `drawChromeBoiAtCoords` method within `handleMouseMove`, 
     * passing the captured x and y values of the mouse from the event
     * this function = gives us coordinate points of our location
     * --That way you can put something on those coordinates
     */

 
  

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  handleClick = () => {
    toggleCycling();
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  handleKey = (event) => {
      if (event.key === 'a') {
        resize('+');
      } else if (event.key === 's'){
        resize('-');
      }
   }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
        onClick={this.handleClick}
        onKeyPress={this.handleKey}
      </canvas>
    )
  }
}
