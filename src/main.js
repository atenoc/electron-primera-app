const { BrowserWindow, Notification } = require("electron");

let window

function createWindow() {
    window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule:true
      },
    });
  
    window.loadFile("src/ui/index.html");
  }

  function hello(){
    console.log("dev console")
  }


  module.exports = {
    createWindow,
    hello
  };