var body = document.getElementsByTagName("body")[0];
var aboutMe = document.getElementsByTagName("h1")[0];
var nickname = document.getElementById("nickname");
var favorites = document.getElementById("favorites");
var hometown = document.getElementById("hometown");
var unorderedList = document.getElementsByTagName("ul")[0];
var listitem = document.getElementsByClassName("listitem")[0];
for(var i = 0; i < unorderedList.children.length; i++) {
  if(unorderedList.children[i].tagName === "li") {
    unorderedList.children[i].className += "listitem";
  }
}

//Added styles
body.style.backgroundColor = "red";
aboutMe.style.backgroundColor = "blue";
body.style.fontFamily = "sans-serif";
nickname.innerHTML = "No nicknames";
favorites.innerHTML = "JavaScript & ice cream";
hometown.innerHTML = "Rowley";

// Add img tag
var img = document.createElement("img");
img.src = "https://avatars3.githubusercontent.com/u/1764391?v=3&s=200";
body.appendChild(img);
