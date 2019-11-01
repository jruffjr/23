var first = document.querySelector("h1#first");
var second = document.querySelector("h1#second");
var img = document.querySelector("img");
var carousel = document.querySelector("div#carousel");
var body = document.querySelector("body");
var coverimg = document.querySelector("img.coverimg");


// window.onload = function(){
//   (body).classList.add("")
// }

document.querySelector("#aboutme").addEventListener("click", function(){

  (carousel).classList.toggle("aboutafter");
  (coverimg).classList.toggle("coverimg1");
});

setInterval(function(){(first).classList.toggle("goaway"); }, 3000);

// setInterval(function(){(second).classList.toggle("goaway"); }, 3000);





// document.querySelector("#contactme").addEventListener("click", function(){
//   h1.innerHTML =
//
//
//   // (h1).classList.toggle("home");
//
//
//
// });
