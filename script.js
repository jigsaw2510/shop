
let elementsArray = document.querySelectorAll("img");
let cardsArray = document.querySelectorAll(".flip-card");
let w = window.innerWidth;
let h1 = document.getElementsByTagName('h1');
let index = 0;
elementsArray.forEach(function(elem, index) {
    elem.addEventListener("load", function() {
        let realWidth = elementsArray[index].naturalWidth;
        let realHeight = elementsArray[index].naturalHeight;
        elementsArray[index].style.height = "100%";
        elementsArray[index].style.width = "100%";
        if (realHeight <= 800) {
          if (w <= 600) {
            cardsArray[index].style.height = "200px";
            cardsArray[index].style.width = "300px";
          }
          else {
            cardsArray[index].style.height = "400px";
            cardsArray[index].style.width = "600px";
          }
        }
        else {
          if (w <= 600){
            cardsArray[index].style.height = "200px";
            cardsArray[index].style.width = "150px";
          }
          else {
            cardsArray[index].style.height = "400px";
            cardsArray[index].style.width = "300px";
          }
          
        }
    });
});

for (i=0; i<h1.length; i++) {
  if (w <= 600) {
            h1[i].style.fontSize = "2em";
          }
}
