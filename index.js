// setting required npm packages

const inquirer = require('inquirer');
const axios = require('axios').default;
const htmlMaker = require('./generateHTML');
const fs = require('fs'),
  convertFactory = require('electron-html-to'); 
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});

// node questions
const questions = [
  {
    type: "input",
    name: "username",
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

];
const data = {};

function getStars() {
    return (axios
     .get(`https//api.github.com/users/${data.login}/starred_url`) 
      .then(function (resp) {
        data.stars = resp.data.length;

      }));
    }

function init(){

  inquirer.prompt(questions)
  .then(function (response) {
    data.login = response.login;
    data.color = response.color;

  })
 axios
  .get(`https://api.github.com/users/${data.login}`)
  .then(async function (resp) {
        let response = resp.data;
          data.bio = response.bio;
          data.location = response.location;
          data.followers = response.followers;
          data.following = response.following;
          data.repos = response;
          data.blog = response.blog;
          data.name = response.login;      
          data.img = response['avatar_url'];
          data.github = `https://www.github.com/${data.login}/`;
  
          await getStars();
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
                console.log('PDF created');
                conversion.kill();
            });
        });


}

init();