
var a = document.getElementById("image");

function upDate(previewPic){     
       a.innerHTML = previewPic.alt;
       var link = previewPic.src;
       a.style.backgroundImage = "url(" + link + ")";
 }
   
       function unDo(){
        a.innerHTML = "Hover over an image below to display here.";
        a.style.backgroundImage = "url('')";
       }