/* 
changing css style dynamically
Add Style */

function addStyle(){
    var myVar = document.querySelector('#paraId');
    myVar.classList.add('para-style');
}

/* Remove style */

function removeStyle(){
    var myVar = document.querySelector('#paraId');
    myVar.classList.remove('para-style');
}

/* Event listener*/ 

document.querySelector('#Event').addEventListener('click',myFunction);

function myFunction(){
    alert('Hello world!');
}

/* Event Listeners with multiple elements*/ 

var len = document.querySelectorAll('.myButton').length;
for (var i = 0; i < len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click',function(){
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + " Is Clicked";
    });
}

/* How to play audio in javascript */

for (var i = 0; i<3; i++){
    document.querySelectorAll('.audioButton1')[i].addEventListener('click', function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
        
});
}

function audioPlay(text){
    switch(text){
            case 'A':
                var audio = new Audio('Audio/A.mp3');
                audio.play();
                break;

            case 'B':
                var audio = new Audio('Audio/S.mp3');
                audio.play();
                break;

            case 'C':
                var audio = new Audio('Audio/R.mp3');
                audio.play();
                break;
        }
}
/* To add and remove animation 

function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function (){
        selectedButton.classList.remove("anim");
    },1000);
}
*/

/* To add and remove animation button by chat Gtp code 

const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
  // Add the "show" class to the element
  button.classList.add('show');

  // Remove the "show" class after the animation has completed
  setTimeout(() => {
    button.classList.remove('show');
  }, 1000); // 1000ms = 1s
});
*/



