  
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs")
const pdf = require('html-pdf')  
const htmlGenerator = require("./generateHTML")


const data = { };

init();

function init() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your Github username?"
      },
      {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red", "orange", "saffron"]
      },

    ]).then(function(promptResponse){
        data.username = promptResponse.username;                 
        data.color = promptResponse.color;                    
        
        const queryURL= `https://api.github.com/users/${data.username}`;
        return axios.get(queryURL);  

    }).then(function(axiosResponse){
        
        data.avatar = axiosResponse.data.avatar_url;      
        data.location = axiosResponse.data.location;     
        data.url = axiosResponse.data.html_url;          
        data.blog = axiosResponse.data.blog;         
        data.bio = axiosResponse.data.bio;          
        data.login = axiosResponse.data.login; 
        data.publicrepos = axiosResponse.data.public_repos; 
        data.followers = axiosResponse.data.followers;    
        data.stars = axiosResponse.data.public_gists; 
        data.following = axiosResponse.data.following;  

        
        console.log("Generating your profile...")
       
        const htmlinfo = htmlGenerator.generateHTML(data);
        
        fs.writeFile('index.html', htmlinfo , function(err){
            
            if (err) {
               throw err
            } else {                

                pdf.create(htmlinfo).toFile('./developer-profile.pdf', function(err, res){
                  if(err) throw err;
                  console.log(res)
                })
            }

        })
    });

    
    
};
