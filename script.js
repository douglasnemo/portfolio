/* a script to make the portfolio interactive. headline h2 turns blue on click */

let blueElement = document.querySelector('h2');
blueElement.onclick = function() {
    blueElement.style.color='blue';
}

let quoteElement = document.getElementById('quote');
quoteElement.onclick = function() {
    quoteElement.innerHTML = 'Another Quote';
}

// to open up the share-button
// let social = document.getElementById('social-media');
let share  = document.getElementById('share-button');
// let socialbutton = document.getElementsByClassName('social-button');

let sharePhoto = function(event) {
 event.target.style.display = 'none';
 // socialbutton.style.display = 'contents';
}
 share.onclick = sharePhoto;

/*
document.getElementById('test').onclick = function(e) {
    console.log('Element clicked!');
  };
*/

/* 
let blueElement = document.querySelector('h1');
function turnBlue() {
    blueElement.style.color = 'blue';
}
blueElement.onclick = turnBlue(); 
*/

/* document.getElementsByTagName('h1')[0].innerHTML='Another quote';*/