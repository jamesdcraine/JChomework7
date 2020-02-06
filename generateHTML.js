const colors = {
    red: {
        backgroundColorA: "red";
        backgroundColorB: "red";
    },
    green: {
        backgroundColorA: "green";
        backgroundColorB: "green";
    },
    blue: {
        backgroundColorA: "blue";
        backgroundColorB: "blue";
    },
    orange: {
        backgroundColorA: "orange";
        backgroundColorB: "orange";
    },
    yellow: {
        backgroundColorA: "yellow";
        backgroundColorB: "yellow";
    },
    brown: {
        backgroundColorA: "brown";
        backgroundColorB: "brown";
    },
    purple: {
        backgroundColorA: "purple";
        backgroundColorB: "purple";
    }
  };

function generateHTML(data) {
    return '<!DOCTYPE html>'
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- added jquery -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<!-- add google fonts -->
<link href="https://fonts.googleapis.com/css?family=Pridi&display=swap" rel="stylesheet">
<!-- add my css  -->
    <title>PDF Document</title>
    <style>

.container {
    margin-left: auto;
    margin-right: auto;
    font-family: 'Pridi', serif;
}

.backgroundColorA {
    position: relative;
    width: 100%;
    height: 33%;
    background-color: ${colors[data.color].backgroundColorA};
}

.backgroundColorB {
    position: relative;
    width: 100%;
    height: 33%;
    background-color: ${colors[data.color].backgroundColorB};
    top: 66%;      
    }

.whiteSpace {
    position: relative;
    width: 100%;
    height: 400px;
    top: 33%;
    background-color: rgb(238, 232, 232);


}
    
.avatar {
    position: relative;   
    z-index: 999;    
}

.largerText {
    font-family: 'Pridi', serif;
    font-size: 32px;
    vertical-align: middle;
    line-height: 35px; 
    
}

.bioBlock {
    position: relative;
    top: 70px;
    height: 400px;
    width: 1250px;
    background-color: #ff8374;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 998;
    border-radius: 5px;
    color: white;
    vertical-align: middle;
    line-height: 40px; 

}

img {
    position: relative;
    border-radius: 50%;
    top: -10px;
    height: 200px;
    width: 200px;
    z-index: 999;
    border: solid 3px yellow;
    box-shadow: 1px 4px 0 0 rgba(12, 2, 2, 0.308);
    box-shadow: 0px 0px 5px 4px  rgba(12, 2, 2, 0.308);
    
  }

  .zeus {
      position: relative;
      height: 40px;
      width: 700px;
      top: 70px;    
      margin-left: auto;
      margin-right: auto;
      z-index: 1000;
      text-align: center;
      background-color: rgb(238, 232, 232);

  }

  .statCard1 {
    position: relative;
    height: 90px;
    width: 375px;
    background-color: #ff8374;
    top: -280px;    
    margin-left: auto;
    margin-right: auto;
    right: 200px;
    z-index: 1000;
    text-align: center;
    border-radius: 5px;
    color: white;
    vertical-align: middle;
    line-height: 40px; 
    font-family: 'Pridi', serif;
    font-size: 24px;


}
.statCard2 {
    position: relative;
    height: 90px;
    width: 375px;
    background-color: #ff8374;
    top: -370px;    
    right: -190px; 
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
    text-align: center;
    border-radius: 5px;
    color: white;
    vertical-align: middle;
    line-height: 40px; 
    font-family: 'Pridi', serif;
    font-size: 24px;

}
.statCard3 {
    position: relative;
    height: 90px;
    width: 375px;
    background-color: #ff8374;
    top: -354px;    
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    right: 200px;
    z-index: 1000;
    text-align: center;
    border-radius: 5px;
    color: white;
    vertical-align: middle;
    font-family: 'Pridi', serif;
    line-height: 40px; 
    font-size: 24px;
}
.statCard4 {
    position: relative;
    height: 90px;
    width: 375px;
    background-color: #ff8374;
    top: -444px;    
    right: -190px; 
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
    text-align: center;
    border-radius: 5px;
    color: white;
    vertical-align: middle;
    line-height: 40px; 
    font-family: 'Pridi', serif;
    font-size: 24px;
}
</style>
</head>
<body>
<div class = "container">


<div class = "backgroundColorA">
<div class = "bioBlock">
    <div class = "avatar"><img src="img src="${data.img}" alt="GitHub  Picture"></div>
<div class = "largerText"><b>Hi!<br>
My name is ${data.name}</b></div>
${data.company}<br>
<a class="nav-link" href="${data.location}"></a> - <a class="nav-link" href="${data.github}"></a> - <a class="nav-link" href="${data.blog}"></a> 
</div>
<div class = "whiteSpace"><div class = "zeus">
    <h2>${data.bio}</h2></div>
</div>
    <div class = "statCard1"><b>Public Repositories</b><br>
        ${data.repos}
    </div>
    <div class = "statCard2"><b>Followers</b><br>
        ${data.followers}
    </div>
    <div class = "statCard3"><b>Github Stars</b><br>
        ${data.stars}
    </div>
    <div class = "statCard4"><b>Following</b><br>
        ${data.following}
    </div>    
</div>

<div class = "backgroundColorB">
    
</div>



</div>

    
</body>
</html>