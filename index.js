// setting required npm packages

const inquirer = require("inquirer");
const axios = require('axios').default;
const htmlMaker = require('.generateHTML.js');
const fs = require('fs'),
convertFactory = require('electron-html-to'); 
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});

// node questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your Github username?"
  },
  {
    type: "list",
    message: "What is you favorite color?",
    name: "color",
    choices: [
      "Red", 
      "Green", 
      "Blue", 
      "Orange",
      "Yellow", 
      "Brown",
      "Purple"
    ]
  }
const data = {};

function getCount() {
    return (axios
     .get('https//api.github.com/users/${data.username}/starred') 
      .then(function (resp) {
        data.stars = resp.data.length;

      }));
    }

function init(){

  inquirer.prompt(questions)
  .then(function (response) {
    data.username = response.username.trim();
    data.color = response.color;

}
 axios
  .get(`https://api.github.com/users/${data.username}`)
  .then(async function (resp) {
        let response = resp.data;

          data.bio = response.bio;
          data.followers = response.followers;
          data.following = response.following;
          data.repos = response;
          data.location = response.location);
          data.blog = response.blog;
          data.name = response.login;      
          data.img = response['avatar_url'];
          data.github = `https://www.github.com/${data.username}/`;

          await getCount();
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
      
            let htmlString = htmlMaker.generateHTML(data);
   
            conversion({ html: htmlString }, function (err, result) {
                if (err) {
                    return console.error(err);
                }

                result.stream.pipe(fs.createWriteStream('./profile.pdf'));
               
                console.log('PDF created')
                conversion.kill();
            });
        });

})


}

init();