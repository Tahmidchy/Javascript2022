/* How to play audio in javascript */

for (var i = 0; i<3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
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

/* To  add remove animation */

function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function (){
        selectedButton.classList.remove("anim");
    },1000);
}

/* Keypress listener javascript */

var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "you have pressed" + count;
})

