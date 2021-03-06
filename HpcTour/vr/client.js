// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'HpcTour', parent, {
    // UNCOMMENT FOR GAZE CONTROLS:
    // raycasters: [{
    //   getType: () => "gaze",
    //   getRayOrigin: () => [0, 0, 0],
    //   getRayDirection: () => [0, 0, -1],
    //   drawsCursor: () => true
    // }],
    // cursorVisibility: "visible",
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  var btmb = document.createElement("button");
  btmb.id = "menuButton";  
  document.body.appendChild(btmb);

  btmb.addEventListener('click', function() {
    location.reload();
  })
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
