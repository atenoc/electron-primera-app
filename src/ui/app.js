//const { remote } = require("electron");
//const main = remote.require("./main");

const electron = require("electron");
const { app, BrowserWindow, remote } = electron;
const main = remote.require("./main");

console.log("Hello world")

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");

productForm.addEventListener("submit", async (e) => {
    console.log("Guardando producto")
    console.log(productName.value)
    console.log(productPrice.value)
    console.log(productDescription.value)

    try {
      e.preventDefault();
  
      const product = {
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
      };
  
      console.log("Fin")
    } catch (error) {
      console.log(error);
    }
  });