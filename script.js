//let list = fetch("data.json").then(response => response.json()).then(json => console.log(json));
let description = "";
let globalList = "";
let prevId = "";

function videoLoad(videoId) {
    document.location.href = globalList[videoId][0];

}

function videoDescription(videoId) {
    if (videoId === prevId) {
        description = globalList[videoId][2];
        descriptionBar = document.getElementById("descriptionBar");
        descriptionBar.style.height = "0%";
        descriptionBar.innerHTML = `

        `;
        prevId = "";
    }




    else {
    description = globalList[videoId][2];
    videoTitle = globalList[videoId][1];
    descriptionBar = document.getElementById("descriptionBar");
    descriptionBar.style.height = "80%";
    descriptionBar.innerHTML = `
    
    <video autoplay playsinline name="media" style = "width:100%; border-radius:5%;"><source src="video/trailers/${globalList[videoId][4]}" type="video/mp4"></video>

    <center>
    <h1 style = "font-family: Tahoma, sans-serif; color:lime; font-size:130%;"> ${videoTitle} </h1>
    <h2 style = "font-family: Tahoma, sans-serif; color:white; font-size:100%;"> ${description} </h2>
    </center>
    `;
    prevId = videoId;
    }
}

function pageLoad(list) {
globalList = list;
let buttonText = "Watch";
let object = document.getElementsByClassName("topMovies")[0];

for(let i = 0;i < globalList.length; i++) {
  let obj = object.appendChild(document.createElement("div"));
  obj.className = "card";
  obj.innerHTML = (`<div class="card2" onclick = "videoDescription(${i})"><img src = "${list[i][3]}" style = "height:70%; width:80%; position:relative; margin-left: 18px; margin-top: 10px;"><button class="watchButton" onclick = "videoLoad(${i});">${buttonText}</button></div>`);
}
}



window.onload = function WindowLoad(event) {
    fetch("data.json")
    .then(res => res.json())
    .then(out =>
      pageLoad(out))
}