// Show the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.onmessage = msg => {
  // Check the type of the message

  switch(msg.type) {
    case 'perform-action': {
      //Use the properties from msg object to perform an action
    }
  }
}