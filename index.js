var inquirer = require("inquirer");
var fs = require('fs');
var axios = require('axios');
var 

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your Github name?"
  },
  {
    type: "list",
    message: "What if you favorite color?",
    name: "stack",
    choices: [
      "Red", 
      "Green", 
      "Blue", 
      "Orange",
      "Yellow", 
      "Brown"

    ]
  }
]).then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
