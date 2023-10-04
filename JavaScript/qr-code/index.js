// step 1:- Use the inquirer npm package to get user input
import inquirer from "inquirer";
import qr from "qr-image";
            //or
// var qr = require("qr-image");
import fs from "fs";
import { log } from "console";
inquirer
  .prompt([
    {
      message: "Type your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // step 2:- Use the qr-image npm package to turn the entered URL into a QR code image.
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png")); 

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// Create a text file to save the user input using native fs node module
