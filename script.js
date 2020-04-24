let button = document.querySelector('button');
let time = document.querySelector('#time');
var secondes = prompt('Choisissez le temps de votre timer');
let timer;


function decompte() {
    
result = secondes;
    if (result >= 0) {

        result = secondes--;
        time.innerHTML += result + '<br />';
    }
    else{
        arreter();
        if(confirm('Voulez vous recommencer?')){
            location.reload();
        }
    }

}
button.addEventListener('click', function start() {
    timer = setInterval(() => {
        decompte();
    }, 1000);
});

function arreter() {
    clearInterval(timer);
}