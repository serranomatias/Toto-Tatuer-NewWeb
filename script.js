

const brokenGlassButton = document.getElementById('broken');


// brokenGlassButton.addEventListener('click', function() {
//     alert('alto trolo si tocaste este boton');
// }); 




// function myFunction(element, color) {
//     element.style.color = color;
//   }

// brokenGlassButton.onclick = function() {
//     brokenImg()
// }

function selectedColor() {
    document.getElementById('broken').style.color = "red";
}

var galleryImgs = document.getElementsByClassName("img-item");
var divAsientos = document.getElementById("div_asientos");

// function hideImg(){
//     for(i=0;i<galleryImgs.length;i++)
//         if(galleryImgs[i].classList.contains('dir-img')) {
//             galleryImgs[i].classList.add('hidden-img');
//             console.log('se escondio img dir-img');
//         } else if(galleryImgs[i].classList.contains('pintura')) {
//             galleryImgs[i].classList.add('hidden-img');
//             console.log('se escondio img pintura');
//         } else if(galleryImgs[i].classList.contains('pintura')) {
//             galleryImgs[i].classList.add('hidden-img');
//             console.log('se escondio img pintura');
//         }
//     }
let isSelected = false;
let isSelected2 = false;
let isSelected3 = false;
function hideImgT(){
    document.getElementById('tatuajes').scrollTop = 0;
}
function hideImgB(){
    if(isSelected == false) {
        resetImg();
        document.getElementById('broken').classList.add('selectedButton');
    for(i=0;i<galleryImgs.length;i++)
        if(galleryImgs[i].classList.contains('broken')) {
    } else {
        galleryImgs[i].classList.add('hidden-img');
    }
    isSelected = true;
    } else {
        resetImg();
    }
}
function hideImgD(){
    if(isSelected2 == false) {
        resetImg();
        document.getElementById('dir').classList.add('selectedButton');
        for(i=0;i<galleryImgs.length;i++)
            if(galleryImgs[i].classList.contains('dir-img')) {
        } else {
            galleryImgs[i].classList.add('hidden-img');
        }
        isSelected2 = true;
    } else {
        resetImg();
    }
}
function hideImgP(){
    if(isSelected3 == false) {
        resetImg();
        document.getElementById('pintura').classList.add('selectedButton');
        for(i=0;i<galleryImgs.length;i++)
            if(galleryImgs[i].classList.contains('pintura')) {
        } else {
            galleryImgs[i].classList.add('hidden-img');
        } 
        isSelected3 = false;
    } else {
        resetImg();
    }
    
}


function resetImg(){
    subir();
    isSelected = false;
    isSelected2 = false;
    isSelected3 = false;
    document.getElementById('broken').classList.remove('selectedButton');
    document.getElementById('dir').classList.remove('selectedButton');
    document.getElementById('pintura').classList.remove('selectedButton');
    for(i=0;i<galleryImgs.length;i++){
        galleryImgs[i].classList.remove('hidden-img');
    }
    }

function subir() {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}